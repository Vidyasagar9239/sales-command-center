import { chartData } from "@/data/mockData";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const chartCardClass = "crm-glass-card p-4 md:p-5";

export function LeadsCreatedChart() {
  return (
    <div className={chartCardClass}>
      <h3 className="text-sm font-semibold mb-4">Leads Created (Last 30 Days)</h3>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={chartData.leadsCreated}>
          <defs>
            <linearGradient id="leadGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.25} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="date" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
          <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 12, border: "1px solid hsl(var(--border))", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} />
          <Area type="monotone" dataKey="count" stroke="hsl(var(--primary))" fill="url(#leadGrad)" strokeWidth={2.5} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CallsByEmployeeChart() {
  return (
    <div className={chartCardClass}>
      <h3 className="text-sm font-semibold mb-4">Calls by Employee</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData.callsByEmployee}>
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={1} />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
          <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 12, border: "1px solid hsl(var(--border))", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} />
          <Bar dataKey="calls" fill="url(#barGrad)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function LeadsByProductChart() {
  return (
    <div className={chartCardClass}>
      <h3 className="text-sm font-semibold mb-4">Leads by Product</h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={chartData.leadsByProduct} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={40} strokeWidth={2} paddingAngle={2}>
            {chartData.leadsByProduct.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 12, border: "1px solid hsl(var(--border))", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PerformanceTrendChart() {
  const colors = ["hsl(217,91%,50%)", "hsl(262,83%,58%)", "hsl(199,89%,48%)", "hsl(25,95%,53%)", "hsl(142,71%,45%)"];
  const names = ["Rahul", "Priya", "Amit", "Sneha", "Vikram"];
  return (
    <div className={chartCardClass}>
      <h3 className="text-sm font-semibold mb-4">Employee Performance Trend</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={chartData.performanceTrend}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="week" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
          <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 12, border: "1px solid hsl(var(--border))", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          {names.map((name, i) => (
            <Line key={name} type="monotone" dataKey={name} stroke={colors[i]} strokeWidth={2.5} dot={{ r: 3, strokeWidth: 2 }} activeDot={{ r: 5 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
