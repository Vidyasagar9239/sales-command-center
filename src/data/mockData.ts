// Mock data for the CRM Dashboard

export type UserRole = "admin" | "employee";

export interface Employee {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
}

export interface Lead {
  id: string;
  client: string;
  phone: string;
  email: string;
  employee: string;
  employeeId: string;
  product: string;
  status: "open" | "qualified" | "hot" | "warm" | "cold" | "closed";
  source: string;
  createdAt: string;
  lastContact: string;
  notes: string;
  probability: number;
}

export interface FollowUp {
  id: string;
  client: string;
  phone: string;
  employee: string;
  employeeId: string;
  product: string;
  scheduledTime: string;
  status: "pending" | "completed" | "missed";
  notes: string;
}

export interface Meeting {
  id: string;
  client: string;
  phone: string;
  employee: string;
  employeeId: string;
  product: string;
  scheduledTime: string;
  status: "scheduled" | "completed" | "missed" | "cancelled";
  location: string;
  notes: string;
}

export interface CallRecord {
  id: string;
  client: string;
  phone: string;
  employee: string;
  employeeId: string;
  product: string;
  time: string;
  duration: string;
  outcome: string;
  notes: string;
}

export const employees: Employee[] = [
  { id: "e1", name: "Rahul Sharma", email: "rahul@company.com", avatar: "RS", role: "employee" },
  { id: "e2", name: "Priya Patel", email: "priya@company.com", avatar: "PP", role: "employee" },
  { id: "e3", name: "Amit Verma", email: "amit@company.com", avatar: "AV", role: "employee" },
  { id: "e4", name: "Sneha Gupta", email: "sneha@company.com", avatar: "SG", role: "employee" },
  { id: "e5", name: "Vikram Singh", email: "vikram@company.com", avatar: "VS", role: "employee" },
];

export const products = ["CRM Pro", "Analytics Suite", "Cloud Backup", "Security Shield", "HR Manager"];

export const leads: Lead[] = [
  { id: "l1", client: "Tata Motors", phone: "+91 98765 43210", email: "procurement@tata.com", employee: "Rahul Sharma", employeeId: "e1", product: "CRM Pro", status: "hot", source: "Website", createdAt: "2026-03-01", lastContact: "2026-03-03", notes: "Very interested, demo scheduled", probability: 85 },
  { id: "l2", client: "Infosys Ltd", phone: "+91 98765 43211", email: "sales@infosys.com", employee: "Priya Patel", employeeId: "e2", product: "Analytics Suite", status: "warm", source: "Referral", createdAt: "2026-02-28", lastContact: "2026-03-02", notes: "Need budget approval", probability: 60 },
  { id: "l3", client: "Wipro Tech", phone: "+91 98765 43212", email: "it@wipro.com", employee: "Amit Verma", employeeId: "e3", product: "Cloud Backup", status: "qualified", source: "Cold Call", createdAt: "2026-02-25", lastContact: "2026-03-01", notes: "Evaluating competitors", probability: 45 },
  { id: "l4", client: "Reliance Jio", phone: "+91 98765 43213", email: "tech@jio.com", employee: "Sneha Gupta", employeeId: "e4", product: "Security Shield", status: "open", source: "Trade Show", createdAt: "2026-03-02", lastContact: "2026-03-02", notes: "Initial inquiry", probability: 20 },
  { id: "l5", client: "HCL Systems", phone: "+91 98765 43214", email: "purchase@hcl.com", employee: "Vikram Singh", employeeId: "e5", product: "HR Manager", status: "cold", source: "Email Campaign", createdAt: "2026-02-20", lastContact: "2026-02-25", notes: "No response to follow-up", probability: 10 },
  { id: "l6", client: "Mahindra Group", phone: "+91 98765 43215", email: "ops@mahindra.com", employee: "Rahul Sharma", employeeId: "e1", product: "Analytics Suite", status: "closed", source: "Website", createdAt: "2026-02-15", lastContact: "2026-03-01", notes: "Contract signed!", probability: 100 },
  { id: "l7", client: "Tech Mahindra", phone: "+91 98765 43216", email: "sales@techmahindra.com", employee: "Priya Patel", employeeId: "e2", product: "CRM Pro", status: "hot", source: "Referral", createdAt: "2026-02-27", lastContact: "2026-03-03", notes: "Final negotiation stage", probability: 90 },
  { id: "l8", client: "Bajaj Finserv", phone: "+91 98765 43217", email: "it@bajaj.com", employee: "Amit Verma", employeeId: "e3", product: "Security Shield", status: "warm", source: "LinkedIn", createdAt: "2026-02-26", lastContact: "2026-03-02", notes: "Meeting with CTO next week", probability: 55 },
  { id: "l9", client: "Godrej Industries", phone: "+91 98765 43218", email: "tech@godrej.com", employee: "Sneha Gupta", employeeId: "e4", product: "Cloud Backup", status: "qualified", source: "Website", createdAt: "2026-02-22", lastContact: "2026-02-28", notes: "Requested pricing details", probability: 40 },
  { id: "l10", client: "Adani Group", phone: "+91 98765 43219", email: "purchase@adani.com", employee: "Vikram Singh", employeeId: "e5", product: "CRM Pro", status: "open", source: "Trade Show", createdAt: "2026-03-01", lastContact: "2026-03-01", notes: "Collected at expo booth", probability: 15 },
  { id: "l11", client: "L&T Infotech", phone: "+91 98765 43220", email: "sales@lnt.com", employee: "Rahul Sharma", employeeId: "e1", product: "HR Manager", status: "hot", source: "Referral", createdAt: "2026-02-18", lastContact: "2026-03-03", notes: "Decision this week", probability: 80 },
  { id: "l12", client: "Sun Pharma", phone: "+91 98765 43221", email: "it@sunpharma.com", employee: "Priya Patel", employeeId: "e2", product: "Cloud Backup", status: "cold", source: "Cold Call", createdAt: "2026-02-10", lastContact: "2026-02-20", notes: "Not interested currently", probability: 5 },
];

export const followUps: FollowUp[] = [
  { id: "f1", client: "Tata Motors", phone: "+91 98765 43210", employee: "Rahul Sharma", employeeId: "e1", product: "CRM Pro", scheduledTime: "2026-03-03T10:00", status: "pending", notes: "Share revised proposal" },
  { id: "f2", client: "Infosys Ltd", phone: "+91 98765 43211", employee: "Priya Patel", employeeId: "e2", product: "Analytics Suite", scheduledTime: "2026-03-03T11:30", status: "pending", notes: "Budget discussion call" },
  { id: "f3", client: "Bajaj Finserv", phone: "+91 98765 43217", employee: "Amit Verma", employeeId: "e3", product: "Security Shield", scheduledTime: "2026-03-03T14:00", status: "completed", notes: "Sent case study" },
  { id: "f4", client: "Godrej Industries", phone: "+91 98765 43218", employee: "Sneha Gupta", employeeId: "e4", product: "Cloud Backup", scheduledTime: "2026-03-03T15:00", status: "pending", notes: "Pricing negotiation" },
  { id: "f5", client: "L&T Infotech", phone: "+91 98765 43220", employee: "Rahul Sharma", employeeId: "e1", product: "HR Manager", scheduledTime: "2026-03-04T09:00", status: "pending", notes: "Final follow-up before close" },
  { id: "f6", client: "HCL Systems", phone: "+91 98765 43214", employee: "Vikram Singh", employeeId: "e5", product: "HR Manager", scheduledTime: "2026-02-28T10:00", status: "missed", notes: "Client unreachable" },
  { id: "f7", client: "Sun Pharma", phone: "+91 98765 43221", employee: "Priya Patel", employeeId: "e2", product: "Cloud Backup", scheduledTime: "2026-02-27T11:00", status: "missed", notes: "Forgot to call" },
  { id: "f8", client: "Wipro Tech", phone: "+91 98765 43212", employee: "Amit Verma", employeeId: "e3", product: "Cloud Backup", scheduledTime: "2026-02-26T14:00", status: "missed", notes: "In another meeting" },
];

export const meetings: Meeting[] = [
  { id: "m1", client: "Tata Motors", phone: "+91 98765 43210", employee: "Rahul Sharma", employeeId: "e1", product: "CRM Pro", scheduledTime: "2026-03-03T14:00", status: "scheduled", location: "Client Office", notes: "Product demo" },
  { id: "m2", client: "Tech Mahindra", phone: "+91 98765 43216", employee: "Priya Patel", employeeId: "e2", product: "CRM Pro", scheduledTime: "2026-03-03T16:00", status: "scheduled", location: "Zoom Call", notes: "Contract discussion" },
  { id: "m3", client: "Bajaj Finserv", phone: "+91 98765 43217", employee: "Amit Verma", employeeId: "e3", product: "Security Shield", scheduledTime: "2026-03-05T10:00", status: "scheduled", location: "Client Office", notes: "CTO meeting" },
  { id: "m4", client: "Adani Group", phone: "+91 98765 43219", employee: "Vikram Singh", employeeId: "e5", product: "CRM Pro", scheduledTime: "2026-03-04T11:00", status: "scheduled", location: "Our Office", notes: "Initial demo" },
  { id: "m5", client: "L&T Infotech", phone: "+91 98765 43220", employee: "Rahul Sharma", employeeId: "e1", product: "HR Manager", scheduledTime: "2026-03-06T15:00", status: "scheduled", location: "Zoom Call", notes: "Closing discussion" },
  { id: "m6", client: "Wipro Tech", phone: "+91 98765 43212", employee: "Amit Verma", employeeId: "e3", product: "Cloud Backup", scheduledTime: "2026-02-27T10:00", status: "missed", location: "Client Office", notes: "Client cancelled last minute" },
  { id: "m7", client: "HCL Systems", phone: "+91 98765 43214", employee: "Vikram Singh", employeeId: "e5", product: "HR Manager", scheduledTime: "2026-02-25T14:00", status: "missed", location: "Zoom Call", notes: "Connection issues" },
];

export const calls: CallRecord[] = [
  { id: "c1", client: "Tata Motors", phone: "+91 98765 43210", employee: "Rahul Sharma", employeeId: "e1", product: "CRM Pro", time: "2026-03-03T09:15", duration: "12 min", outcome: "Interested", notes: "Will send proposal" },
  { id: "c2", client: "Infosys Ltd", phone: "+91 98765 43211", employee: "Priya Patel", employeeId: "e2", product: "Analytics Suite", time: "2026-03-03T09:45", duration: "8 min", outcome: "Callback Requested", notes: "Busy, call back at 2pm" },
  { id: "c3", client: "Wipro Tech", phone: "+91 98765 43212", employee: "Amit Verma", employeeId: "e3", product: "Cloud Backup", time: "2026-03-03T10:00", duration: "15 min", outcome: "Demo Scheduled", notes: "Demo next week" },
  { id: "c4", client: "Reliance Jio", phone: "+91 98765 43213", employee: "Sneha Gupta", employeeId: "e4", product: "Security Shield", time: "2026-03-03T10:30", duration: "5 min", outcome: "Not Interested", notes: "Has existing solution" },
  { id: "c5", client: "Adani Group", phone: "+91 98765 43219", employee: "Vikram Singh", employeeId: "e5", product: "CRM Pro", time: "2026-03-03T11:00", duration: "20 min", outcome: "Interested", notes: "Meeting set up" },
  { id: "c6", client: "Tech Mahindra", phone: "+91 98765 43216", employee: "Priya Patel", employeeId: "e2", product: "CRM Pro", time: "2026-03-03T11:30", duration: "10 min", outcome: "Proposal Sent", notes: "Sent pricing" },
  { id: "c7", client: "Bajaj Finserv", phone: "+91 98765 43217", employee: "Amit Verma", employeeId: "e3", product: "Security Shield", time: "2026-03-03T12:00", duration: "18 min", outcome: "Interested", notes: "CTO wants demo" },
  { id: "c8", client: "Godrej Industries", phone: "+91 98765 43218", employee: "Sneha Gupta", employeeId: "e4", product: "Cloud Backup", time: "2026-03-03T13:00", duration: "7 min", outcome: "Follow-up Set", notes: "Need more info" },
  { id: "c9", client: "L&T Infotech", phone: "+91 98765 43220", employee: "Rahul Sharma", employeeId: "e1", product: "HR Manager", time: "2026-03-03T13:30", duration: "25 min", outcome: "Closing Soon", notes: "Final terms discussed" },
  { id: "c10", client: "Sun Pharma", phone: "+91 98765 43221", employee: "Priya Patel", employeeId: "e2", product: "Cloud Backup", time: "2026-03-03T14:00", duration: "3 min", outcome: "No Answer", notes: "Voicemail left" },
];

export const chartData = {
  leadsCreated: [
    { date: "Feb 1", count: 3 }, { date: "Feb 5", count: 5 }, { date: "Feb 10", count: 2 },
    { date: "Feb 15", count: 7 }, { date: "Feb 20", count: 4 }, { date: "Feb 25", count: 6 },
    { date: "Mar 1", count: 8 }, { date: "Mar 3", count: 3 },
  ],
  callsByEmployee: [
    { name: "Rahul", calls: 45 }, { name: "Priya", calls: 38 },
    { name: "Amit", calls: 42 }, { name: "Sneha", calls: 35 }, { name: "Vikram", calls: 30 },
  ],
  leadsByProduct: [
    { name: "CRM Pro", value: 4, fill: "hsl(217, 91%, 50%)" },
    { name: "Analytics Suite", value: 2, fill: "hsl(262, 83%, 58%)" },
    { name: "Cloud Backup", value: 3, fill: "hsl(199, 89%, 48%)" },
    { name: "Security Shield", value: 2, fill: "hsl(25, 95%, 53%)" },
    { name: "HR Manager", value: 2, fill: "hsl(142, 71%, 45%)" },
  ],
  performanceTrend: [
    { week: "W1", Rahul: 12, Priya: 10, Amit: 11, Sneha: 9, Vikram: 8 },
    { week: "W2", Rahul: 15, Priya: 13, Amit: 14, Sneha: 11, Vikram: 10 },
    { week: "W3", Rahul: 18, Priya: 15, Amit: 13, Sneha: 14, Vikram: 12 },
    { week: "W4", Rahul: 20, Priya: 18, Amit: 16, Sneha: 13, Vikram: 15 },
  ],
};
