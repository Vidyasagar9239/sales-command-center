import { AlertTriangle, Clock, TrendingUp, UserX } from "lucide-react";
import { useFilteredData } from "@/hooks/useFilteredData";

export function SmartAlerts() {
  const { missedFollowUps7d, missedMeetings7d, projectedClosings, coldLeads } = useFilteredData();

  const alerts = [
    missedFollowUps7d.length > 0 && {
      icon: Clock,
      message: `${missedFollowUps7d.length} missed follow-ups in last 7 days`,
      color: "text-crm-missed bg-crm-missed/10 border border-crm-missed/20",
    },
    missedMeetings7d.length > 0 && {
      icon: AlertTriangle,
      message: `${missedMeetings7d.length} missed meetings recently`,
      color: "text-crm-warm bg-crm-warm/10 border border-crm-warm/20",
    },
    projectedClosings.length > 0 && {
      icon: TrendingUp,
      message: `${projectedClosings.length} high-probability deals to close`,
      color: "text-crm-closed bg-crm-closed/10 border border-crm-closed/20",
    },
    coldLeads.length > 0 && {
      icon: UserX,
      message: `${coldLeads.length} idle/cold leads need attention`,
      color: "text-crm-cold bg-crm-cold/10 border border-crm-cold/20",
    },
  ].filter(Boolean) as { icon: any; message: string; color: string }[];

  if (alerts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {alerts.map((alert, i) => (
        <div key={i} className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium ${alert.color} backdrop-blur-sm`}>
          <alert.icon className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="leading-tight">{alert.message}</span>
        </div>
      ))}
    </div>
  );
}
