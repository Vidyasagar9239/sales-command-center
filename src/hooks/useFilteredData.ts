import { useCRM } from "@/contexts/CRMContext";
import { leads, followUps, meetings, calls } from "@/data/mockData";
import { useMemo } from "react";

export function useFilteredData() {
  const { filters, role, currentEmployeeId } = useCRM();

  return useMemo(() => {
    const empFilter = role === "employee" ? currentEmployeeId : filters.employeeId;

    const filterByEmployee = <T extends { employeeId: string }>(items: T[]) =>
      empFilter === "all" ? items : items.filter((i) => i.employeeId === empFilter);

    const filterByProduct = <T extends { product: string }>(items: T[]) =>
      filters.product === "all" ? items : items.filter((i) => i.product === filters.product);

    const apply = <T extends { employeeId: string; product: string }>(items: T[]) =>
      filterByProduct(filterByEmployee(items));

    const filteredLeads = (() => {
      let result = apply(leads);
      if (filters.leadStatus !== "all") result = result.filter((l) => l.status === filters.leadStatus);
      return result;
    })();

    const filteredFollowUps = apply(followUps);
    const filteredMeetings = (() => {
      let result = apply(meetings);
      if (filters.meetingStatus !== "all") result = result.filter((m) => m.status === filters.meetingStatus);
      return result;
    })();
    const filteredCalls = apply(calls);

    const today = "2026-03-03";

    const todayCalls = filteredCalls.filter((c) => c.time.startsWith(today));
    const todayFollowUps = filteredFollowUps.filter((f) => f.scheduledTime.startsWith(today));
    const todayMeetings = filteredMeetings.filter((m) => m.scheduledTime.startsWith(today));
    const projectedClosings = filteredLeads.filter((l) => l.probability >= 80);

    const openLeads = filteredLeads.filter((l) => l.status === "open");
    const qualifiedLeads = filteredLeads.filter((l) => l.status === "qualified");
    const hotLeads = filteredLeads.filter((l) => l.status === "hot");
    const warmLeads = filteredLeads.filter((l) => l.status === "warm");
    const coldLeads = filteredLeads.filter((l) => l.status === "cold");
    const closedLeads = filteredLeads.filter((l) => l.status === "closed");

    const missedFollowUps7d = filteredFollowUps.filter((f) => f.status === "missed");
    const missedMeetings7d = filteredMeetings.filter((m) => m.status === "missed");
    const tomorrowFollowUps = filteredFollowUps.filter((f) => f.scheduledTime.startsWith("2026-03-04"));

    const upcomingMeetings = filteredMeetings.filter(
      (m) => m.status === "scheduled" && m.scheduledTime > today
    );
    const next7dMeetings = filteredMeetings.filter(
      (m) => m.status === "scheduled" && m.scheduledTime >= today && m.scheduledTime <= "2026-03-10"
    );

    return {
      filteredLeads, filteredFollowUps, filteredMeetings, filteredCalls,
      todayCalls, todayFollowUps, todayMeetings, projectedClosings,
      openLeads, qualifiedLeads, hotLeads, warmLeads, coldLeads, closedLeads,
      missedFollowUps7d, missedMeetings7d, tomorrowFollowUps,
      upcomingMeetings, next7dMeetings,
    };
  }, [filters, role, currentEmployeeId]);
}
