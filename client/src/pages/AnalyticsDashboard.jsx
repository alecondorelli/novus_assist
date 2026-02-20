import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell,
} from 'recharts';

const STORAGE_KEY = 'novus-chat-state';

function loadRealData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        rating: parsed.rating || null,
        messageCount: parsed.messages?.length || 0,
        userMessages: parsed.messages?.filter((m) => m.role === 'user').length || 0,
      };
    }
  } catch {
    // ignore
  }
  return null;
}

function generateDailyData() {
  const data = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const base = isWeekend ? 250 : 520;
    const trend = (30 - i) * 3;
    const noise = Math.floor(Math.random() * 80) - 40;
    data.push({
      date: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      conversations: Math.max(150, base + trend + noise),
    });
  }
  return data;
}

const categoryData = [
  { name: 'Account Queries', value: 34, color: '#64748b' },
  { name: 'Transaction Disputes', value: 22, color: '#5b8a9a' },
  { name: 'Product Inquiries', value: 18, color: '#94a3b8' },
  { name: 'Cancellation/Retention', value: 15, color: '#1e3a5f' },
  { name: 'Fraud Alerts', value: 11, color: '#6b9080' },
];

const mockConversations = [
  { time: '2 min ago', customer: 'Sarah C.', issue: 'Unrecognised charge', resolution: 'Dispute initiated', duration: '3m 12s', rating: 4.8 },
  { time: '8 min ago', customer: 'Alessandro C.', issue: 'Account cancellation', resolution: 'Retention offer accepted', duration: '4m 45s', rating: 4.9 },
  { time: '15 min ago', customer: 'James W.', issue: 'Card blocked abroad', resolution: 'Travel flag added', duration: '1m 58s', rating: 5.0 },
  { time: '22 min ago', customer: 'Priya S.', issue: 'Balance enquiry', resolution: 'Account details shared', duration: '1m 04s', rating: 4.7 },
  { time: '31 min ago', customer: 'Tomasz K.', issue: 'Suspicious transaction', resolution: 'Card replaced', duration: '5m 22s', rating: 4.6 },
  { time: '45 min ago', customer: 'Emma L.', issue: 'Product recommendation', resolution: 'Savings Plus recommended', duration: '2m 38s', rating: 4.9 },
  { time: '1h ago', customer: 'Marcus D.', issue: 'Monthly fee query', resolution: 'Fee breakdown explained', duration: '1m 15s', rating: 4.5 },
  { time: '1h ago', customer: 'Fatima A.', issue: 'PIN reset request', resolution: 'Escalated to specialist', duration: '2m 50s', rating: 4.3 },
  { time: '2h ago', customer: 'Liam O.', issue: 'Direct debit failed', resolution: 'Payment rescheduled', duration: '3m 05s', rating: 4.8 },
  { time: '2h ago', customer: 'Nina R.', issue: 'Account upgrade', resolution: 'Premium trial activated', duration: '2m 20s', rating: 5.0 },
];

function MetricCard({ title, value, change, changeLabel, subtitle }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <p className="text-[13px] font-medium text-gray-400 mb-1">{title}</p>
      <p className="text-[32px] font-bold text-gray-900 tracking-tight leading-tight">{value}</p>
      {change && (
        <p className="text-[12px] text-emerald-600 font-medium mt-1">
          <span className="inline-block mr-0.5">&#8593;</span>
          {changeLabel}
        </p>
      )}
      <p className="text-[13px] text-gray-400 mt-1">{subtitle}</p>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-900 text-white text-[12px] px-3 py-2 rounded-lg shadow-lg">
      <p className="font-medium">{label}</p>
      <p className="text-gray-300">{payload[0].value.toLocaleString()} conversations</p>
    </div>
  );
}

function BarTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-900 text-white text-[12px] px-3 py-2 rounded-lg shadow-lg">
      <p className="font-medium">{payload[0].payload.name}</p>
      <p className="text-gray-300">{payload[0].value}%</p>
    </div>
  );
}

export default function AnalyticsDashboard() {
  const dailyData = useMemo(generateDailyData, []);
  const realData = useMemo(loadRealData, []);

  const conversations = useMemo(() => {
    if (!realData?.rating) return mockConversations;
    const augmented = [...mockConversations];
    augmented[0] = {
      ...augmented[0],
      rating: realData.rating.stars,
      time: 'Just now',
      resolution: 'Completed via AI assistant',
    };
    return augmented;
  }, [realData]);

  const csatScore = realData?.rating
    ? ((4.6 * 12846 + realData.rating.stars) / 12847).toFixed(1)
    : '4.6';

  const totalConversations = realData?.userMessages
    ? (12847 + 1).toLocaleString()
    : '12,847';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[15px] font-semibold tracking-tight text-gray-900">Novus</span>
            <span className="text-gray-300">/</span>
            <span className="text-[14px] font-medium text-gray-500">Analytics</span>
          </div>
          <Link
            to="/"
            className="text-[13px] font-medium text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
            </svg>
            Back to Chat
          </Link>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-6 py-8 space-y-8">
        {/* Page title */}
        <div>
          <h1 className="text-[24px] font-bold text-gray-900 tracking-tight">Agent Performance</h1>
          <p className="text-[14px] text-gray-400 mt-1">Last 30 days overview</p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Resolution Rate"
            value="73.2%"
            change
            changeLabel="4.1% vs last month"
            subtitle="Issues resolved without escalation"
          />
          <MetricCard
            title="Avg Handle Time"
            value="2m 14s"
            change
            changeLabel="12% faster"
            subtitle="Average conversation duration"
          />
          <MetricCard
            title="CSAT Score"
            value={`${csatScore}/5`}
            change
            changeLabel="0.3 pts"
            subtitle="Customer satisfaction rating"
          />
          <MetricCard
            title="Conversations"
            value={totalConversations}
            change={false}
            changeLabel=""
            subtitle="Total interactions handled"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Line chart */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-[14px] font-semibold text-gray-900 mb-6">Conversations Over Time</h2>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 11, fill: '#94a3b8' }}
                  tickLine={false}
                  axisLine={{ stroke: '#e2e8f0' }}
                  interval={4}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: '#94a3b8' }}
                  tickLine={false}
                  axisLine={false}
                  width={40}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="conversations"
                  stroke="#1e3a5f"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, fill: '#1e3a5f', stroke: '#fff', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar chart */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-[14px] font-semibold text-gray-900 mb-6">Resolution by Category</h2>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={categoryData} layout="vertical" barCategoryGap={8}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                <XAxis
                  type="number"
                  tick={{ fontSize: 11, fill: '#94a3b8' }}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 40]}
                  tickFormatter={(v) => `${v}%`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  tickLine={false}
                  axisLine={false}
                  width={140}
                />
                <Tooltip content={<BarTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                  {categoryData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent conversations table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-[14px] font-semibold text-gray-900">Recent Conversations</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Time</th>
                  <th className="text-left px-6 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Customer</th>
                  <th className="text-left px-6 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Issue</th>
                  <th className="text-left px-6 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Resolution</th>
                  <th className="text-left px-6 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Duration</th>
                  <th className="text-left px-6 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Rating</th>
                </tr>
              </thead>
              <tbody>
                {conversations.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                    <td className="px-6 py-3 text-gray-400 whitespace-nowrap">{row.time}</td>
                    <td className="px-6 py-3 font-medium text-gray-700 whitespace-nowrap">{row.customer}</td>
                    <td className="px-6 py-3 text-gray-600">{row.issue}</td>
                    <td className="px-6 py-3 text-gray-600">{row.resolution}</td>
                    <td className="px-6 py-3 text-gray-400 whitespace-nowrap">{row.duration}</td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <span className="text-amber-500 mr-1">&#9733;</span>
                      <span className="text-gray-700 font-medium">{row.rating}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live indicator */}
        <div className="flex justify-end items-center gap-2 pb-4">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-[12px] font-medium text-gray-400">Agent Online</span>
        </div>
      </div>
    </div>
  );
}
