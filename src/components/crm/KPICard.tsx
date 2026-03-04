import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
  subtitle?: string;
}

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  hot: "bg-crm-hot/10 text-crm-hot",
  warm: "bg-crm-warm/10 text-crm-warm",
  cold: "bg-crm-cold/10 text-crm-cold",
  closed: "bg-crm-closed/10 text-crm-closed",
  missed: "bg-crm-missed/10 text-crm-missed",
  qualified: "bg-crm-qualified/10 text-crm-qualified",
  open: "bg-crm-open/10 text-crm-open",
};

const gradientMap: Record<string, string> = {
  primary: "from-primary/5 to-transparent",
  hot: "from-crm-hot/5 to-transparent",
  warm: "from-crm-warm/5 to-transparent",
  cold: "from-crm-cold/5 to-transparent",
  closed: "from-crm-closed/5 to-transparent",
  missed: "from-crm-missed/5 to-transparent",
  qualified: "from-crm-qualified/5 to-transparent",
  open: "from-crm-open/5 to-transparent",
};

const dotColorMap: Record<string, string> = {
  primary: "bg-primary",
  hot: "bg-crm-hot",
  warm: "bg-crm-warm",
  cold: "bg-crm-cold",
  closed: "bg-crm-closed",
  missed: "bg-crm-missed",
  qualified: "bg-crm-qualified",
  open: "bg-crm-open",
};

export function KPICard({ title, value, icon: Icon, color, onClick, subtitle }: KPICardProps) {
  const iconColor = colorMap[color] || colorMap.primary;
  const dotColor = dotColorMap[color] || dotColorMap.primary;
  const gradient = gradientMap[color] || gradientMap.primary;

  return (
    <div
      className={`crm-kpi-card group relative overflow-hidden bg-gradient-to-br ${gradient}`}
      onClick={onClick}
    >
      {/* Decorative accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 rounded-full ${dotColor} opacity-[0.04] -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500`} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <div className={`p-2.5 rounded-xl ${iconColor} transition-transform duration-200 group-hover:scale-110`}>
            <Icon className="h-4 w-4" />
          </div>
          <div className={`h-2 w-2 rounded-full ${dotColor} animate-pulse`} />
        </div>
        <p className="text-2xl md:text-3xl font-extrabold tracking-tight">{value}</p>
        <p className="text-xs text-muted-foreground mt-1.5 font-medium leading-tight">{title}</p>
        {subtitle && <p className="text-[10px] text-muted-foreground/60 mt-0.5">{subtitle}</p>}
        <div className="mt-3 text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 font-semibold flex items-center gap-1">
          View details <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
}
