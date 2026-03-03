import { chartData } from "@/data/mockData";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

export function LeadsCreatedChart() {
  return (
    <div className="bg-card rounded-lg border border-border p-5">
      <h3 className="text-sm font-semibold mb-4">Leads Created (Last 30 Days)</h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={chartData.leadsCreated}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="date" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid hsl(var(--border))" }} />
          <Area type="monotone" dataKey="count" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.15)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CallsByEmployeeChart() {
  return (
    <div className="bg-card rounded-lg border border-border p-5">
      <h3 className="text-sm font-semibold mb-4">Calls by Employee</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData.callsByEmployee}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid hsl(var(--border))" }} />
          <Bar dataKey="calls" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function LeadsByProductChart() {
  return (
    <div className="bg-card rounded-lg border border-border p-5">
      <h3 className="text-sm font-semibold mb-4">Leads by Product</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={chartData.leadsByProduct} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75} strokeWidth={2}>
            {chartData.leadsByProduct.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid hsl(var(--border))" }} />
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
    <div className="bg-card rounded-lg border border-border p-5">
      <h3 className="text-sm font-semibold mb-4">Employee Performance Trend</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData.performanceTrend}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="week" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid hsl(var(--border))" }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          {names.map((name, i) => (
            <Line key={name} type="monotone" dataKey={name} stroke={colors[i]} strokeWidth={2} dot={{ r: 3 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
