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

const dotColorMap: Record<string, string> = {
  primary: "bg-primary shadow-primary/40",
  hot: "bg-crm-hot shadow-crm-hot/40",
  warm: "bg-crm-warm shadow-crm-warm/40",
  cold: "bg-crm-cold shadow-crm-cold/40",
  closed: "bg-crm-closed shadow-crm-closed/40",
  missed: "bg-crm-missed shadow-crm-missed/40",
  qualified: "bg-crm-qualified shadow-crm-qualified/40",
  open: "bg-crm-open shadow-crm-open/40",
};

const iconBorderMap: Record<string, string> = {
  primary: "ring-primary/20",
  hot: "ring-crm-hot/20",
  warm: "ring-crm-warm/20",
  cold: "ring-crm-cold/20",
  closed: "ring-crm-closed/20",
  missed: "ring-crm-missed/20",
  qualified: "ring-crm-qualified/20",
  open: "ring-crm-open/20",
};

export function KPICard({ title, value, icon: Icon, color, onClick, subtitle }: KPICardProps) {
  const iconColor = colorMap[color] || colorMap.primary;
  const dotColor = dotColorMap[color] || dotColorMap.primary;
  const iconBorder = iconBorderMap[color] || iconBorderMap.primary;

  return (
    <div className="crm-kpi-card group" onClick={onClick}>
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className={`p-2.5 rounded-xl ${iconColor} ring-1 ${iconBorder} backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
            <Icon className="h-4 w-4" />
          </div>
          <div className={`h-2.5 w-2.5 rounded-full ${dotColor} shadow-md animate-pulse`} />
        </div>
        <p className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text">{value}</p>
        <p className="text-[11px] text-muted-foreground mt-1.5 font-semibold leading-tight">{title}</p>
        {subtitle && <p className="text-[10px] text-muted-foreground/60 mt-0.5">{subtitle}</p>}
        <div className="mt-3 text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 font-semibold flex items-center gap-1">
          View details <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </div>
  );
}
