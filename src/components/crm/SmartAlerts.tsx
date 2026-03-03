import { AlertTriangle, Clock, TrendingUp, UserX } from "lucide-react";
import { useFilteredData } from "@/hooks/useFilteredData";

export function SmartAlerts() {
  const { missedFollowUps7d, missedMeetings7d, projectedClosings, coldLeads } = useFilteredData();

  const alerts = [
    missedFollowUps7d.length > 0 && {
      icon: Clock,
      message: `${missedFollowUps7d.length} missed follow-ups in last 7 days`,
      color: "text-crm-missed bg-crm-missed/10",
    },
    missedMeetings7d.length > 0 && {
      icon: AlertTriangle,
      message: `${missedMeetings7d.length} missed meetings recently`,
      color: "text-crm-warm bg-crm-warm/10",
    },
    projectedClosings.length > 0 && {
      icon: TrendingUp,
      message: `${projectedClosings.length} high-probability deals to close`,
      color: "text-crm-closed bg-crm-closed/10",
    },
    coldLeads.length > 0 && {
      icon: UserX,
      message: `${coldLeads.length} idle/cold leads need attention`,
      color: "text-crm-cold bg-crm-cold/10",
    },
  ].filter(Boolean) as { icon: any; message: string; color: string }[];

  if (alerts.length === 0) return null;

  return (
    <div className="flex gap-3 flex-wrap">
      {alerts.map((alert, i) => (
        <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium ${alert.color}`}>
          <alert.icon className="h-3.5 w-3.5" />
          {alert.message}
        </div>
      ))}
    </div>
  );
}
