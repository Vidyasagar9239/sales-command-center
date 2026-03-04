import { useState } from "react";
import { GlobalFilters } from "@/components/crm/GlobalFilters";
import { KPICard } from "@/components/crm/KPICard";
import { DrillDownModal } from "@/components/crm/DrillDownModal";
import { SmartAlerts } from "@/components/crm/SmartAlerts";
import { AdminLeadUpload } from "@/components/crm/AdminLeadUpload";
import {
  LeadsCreatedChart, CallsByEmployeeChart, LeadsByProductChart, PerformanceTrendChart,
} from "@/components/crm/CRMCharts";
import { useFilteredData } from "@/hooks/useFilteredData";
import { useCRM } from "@/contexts/CRMContext";
import {
  Phone, CalendarCheck, Target, TrendingUp, Users, Flame, ThermometerSun,
  Snowflake, CheckCircle, AlertTriangle, Clock, CalendarDays, ArrowRight,
} from "lucide-react";

type ModalConfig = {
  title: string;
  data: Record<string, any>[];
  columns: { key: string; label: string }[];
} | null;

const callCols = [
  { key: "client", label: "Client" }, { key: "phone", label: "Phone" },
  { key: "employee", label: "Employee" }, { key: "product", label: "Product" },
  { key: "time", label: "Time" }, { key: "duration", label: "Duration" },
  { key: "outcome", label: "Outcome" }, { key: "notes", label: "Notes" },
];
const followUpCols = [
  { key: "client", label: "Client" }, { key: "phone", label: "Phone" },
  { key: "employee", label: "Employee" }, { key: "product", label: "Product" },
  { key: "scheduledTime", label: "Scheduled" }, { key: "status", label: "Status" },
  { key: "notes", label: "Notes" },
];
const meetingCols = [
  { key: "client", label: "Client" }, { key: "phone", label: "Phone" },
  { key: "employee", label: "Employee" }, { key: "product", label: "Product" },
  { key: "scheduledTime", label: "Scheduled" }, { key: "location", label: "Location" },
  { key: "status", label: "Status" }, { key: "notes", label: "Notes" },
];
const leadCols = [
  { key: "client", label: "Client" }, { key: "phone", label: "Phone" },
  { key: "employee", label: "Employee" }, { key: "product", label: "Product" },
  { key: "status", label: "Status" }, { key: "probability", label: "Probability %" },
  { key: "lastContact", label: "Last Contact" }, { key: "notes", label: "Notes" },
];

export default function DashboardPage() {
  const { role } = useCRM();
  const data = useFilteredData();
  const [modal, setModal] = useState<ModalConfig>(null);

  const open = (title: string, items: any[], columns: { key: string; label: string }[]) =>
    setModal({ title, data: items, columns });

  return (
    <div className="space-y-4 md:space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-lg md:text-xl font-bold">Sales Dashboard</h1>
          <p className="text-xs text-muted-foreground">
            {role === "admin" ? "Company-wide overview" : "Your daily workbench"} · March 4, 2026
          </p>
        </div>
        {role === "admin" && <AdminLeadUpload />}
      </div>

      {/* Alerts */}
      <SmartAlerts />

      {/* Filters */}
      <GlobalFilters />

      {/* Row 1: Daily Activity */}
      <div>
        <p className="crm-section-title">Daily Activity</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          <KPICard title="Total Calls (Today)" value={data.todayCalls.length} icon={Phone} color="primary"
            onClick={() => open("Today's Calls", data.todayCalls, callCols)} />
          <KPICard title="Today Follow-ups" value={data.todayFollowUps.length} icon={CalendarCheck} color="warm"
            onClick={() => open("Today's Follow-ups", data.todayFollowUps, followUpCols)} />
          <KPICard title="Today Meetings" value={data.todayMeetings.length} icon={CalendarDays} color="qualified"
            onClick={() => open("Today's Meetings", data.todayMeetings, meetingCols)} />
          <KPICard title="Projected Closings" value={data.projectedClosings.length} icon={Target} color="closed"
            onClick={() => open("Projected Closings (80%+ probability)", data.projectedClosings, leadCols)} />
        </div>
      </div>

      {/* Row 2: Lead Pipeline */}
      <div>
        <p className="crm-section-title">Lead Pipeline</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          <KPICard title="Open Leads" value={data.openLeads.length} icon={Users} color="open"
            onClick={() => open("Open Leads", data.openLeads, leadCols)} />
          <KPICard title="Qualified" value={data.qualifiedLeads.length} icon={TrendingUp} color="qualified"
            onClick={() => open("Qualified Leads", data.qualifiedLeads, leadCols)} />
          <KPICard title="Hot Leads" value={data.hotLeads.length} icon={Flame} color="hot"
            onClick={() => open("Hot Leads", data.hotLeads, leadCols)} />
          <KPICard title="Warm Leads" value={data.warmLeads.length} icon={ThermometerSun} color="warm"
            onClick={() => open("Warm Leads", data.warmLeads, leadCols)} />
          <KPICard title="Cold Leads" value={data.coldLeads.length} icon={Snowflake} color="cold"
            onClick={() => open("Cold Leads", data.coldLeads, leadCols)} />
          <KPICard title="Closed Won" value={data.closedLeads.length} icon={CheckCircle} color="closed"
            onClick={() => open("Closed Won", data.closedLeads, leadCols)} />
        </div>
      </div>

      {/* Row 3: Missed & Risk */}
      <div>
        <p className="crm-section-title">Missed & Risk Metrics</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
          <KPICard title="Missed Follow-ups (7d)" value={data.missedFollowUps7d.length} icon={AlertTriangle} color="missed"
            onClick={() => open("Missed Follow-ups (Last 7 Days)", data.missedFollowUps7d, followUpCols)} />
          <KPICard title="Missed Meetings (7d)" value={data.missedMeetings7d.length} icon={Clock} color="missed"
            onClick={() => open("Missed Meetings (Last 7 Days)", data.missedMeetings7d, meetingCols)} />
          <KPICard title="Tomorrow Follow-ups" value={data.tomorrowFollowUps.length} icon={ArrowRight} color="primary"
            onClick={() => open("Tomorrow's Follow-ups", data.tomorrowFollowUps, followUpCols)} />
        </div>
      </div>

      {/* Row 4: Upcoming */}
      <div>
        <p className="crm-section-title">Upcoming Planning</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
          <KPICard title="Next 7 Days Meetings" value={data.next7dMeetings.length} icon={CalendarDays} color="primary"
            onClick={() => open("Next 7 Days Meetings", data.next7dMeetings, meetingCols)} />
          <KPICard title="Upcoming Meetings" value={data.upcomingMeetings.length} icon={CalendarCheck} color="qualified"
            onClick={() => open("All Upcoming Meetings", data.upcomingMeetings, meetingCols)} />
        </div>
      </div>

      {/* Charts */}
      <div>
        <p className="crm-section-title">Analytics</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
          <LeadsCreatedChart />
          <CallsByEmployeeChart />
          <LeadsByProductChart />
          <PerformanceTrendChart />
        </div>
      </div>

      {/* Drill Down Modal */}
      {modal && (
        <DrillDownModal
          open={!!modal}
          onClose={() => setModal(null)}
          title={modal.title}
          data={modal.data}
          columns={modal.columns}
        />
      )}
    </div>
  );
}
