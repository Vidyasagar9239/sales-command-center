import { ReactNode } from "react";
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

  return (
    <div className="crm-kpi-card group" onClick={onClick}>
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg ${iconColor}`}>
          <Icon className="h-4 w-4" />
        </div>
        <div className={`h-2 w-2 rounded-full ${dotColor}`} />
      </div>
      <p className="text-2xl font-bold animate-count-up">{value}</p>
      <p className="text-xs text-muted-foreground mt-1 font-medium">{title}</p>
      {subtitle && <p className="text-[10px] text-muted-foreground/60 mt-0.5">{subtitle}</p>}
      <div className="mt-3 text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
        Click to view details →
      </div>
    </div>
  );
}
