const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-[60vh]">
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-muted-foreground">This module is coming soon. Use the Dashboard for a full overview.</p>
    </div>
  </div>
);

export const LeadsPage = () => <PlaceholderPage title="Leads Management" />;
export const FollowUpsPage = () => <PlaceholderPage title="Follow-ups" />;
export const MeetingsPage = () => <PlaceholderPage title="Meetings" />;
export const AccountsPage = () => <PlaceholderPage title="Accounts" />;
export const ReportsPage = () => <PlaceholderPage title="Reports" />;
export const PerformancePage = () => <PlaceholderPage title="Employee Performance" />;
export const ProductsPage = () => <PlaceholderPage title="Product Analytics" />;
export const AdminPage = () => <PlaceholderPage title="Admin Panel" />;
