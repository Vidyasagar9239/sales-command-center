import { NavLink } from "@/components/NavLink";
import { useCRM } from "@/contexts/CRMContext";
import {
  LayoutDashboard, Users, PhoneCall, CalendarDays, Building2,
  BarChart3, UserCheck, Package, Settings, ChevronLeft, ChevronRight,
  Menu, X,
} from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const adminNav = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Leads", url: "/leads", icon: Users },
  { title: "Follow-ups", url: "/follow-ups", icon: PhoneCall },
  { title: "Meetings", url: "/meetings", icon: CalendarDays },
  { title: "Accounts", url: "/accounts", icon: Building2 },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Performance", url: "/performance", icon: UserCheck },
  { title: "Products", url: "/products", icon: Package },
  { title: "Admin Panel", url: "/admin", icon: Settings },
];

const employeeNav = adminNav.filter((n) => !["Admin Panel", "Performance"].includes(n.title));

export function CRMSidebar() {
  const { role } = useCRM();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();
  const nav = role === "admin" ? adminNav : employeeNav;

  // Mobile: off-canvas drawer
  if (isMobile) {
    return (
      <>
        {/* Hamburger button rendered by CRMTopBar via context — we render the drawer here */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <aside className="relative w-64 bg-[hsl(var(--crm-sidebar))] text-[hsl(var(--crm-sidebar-foreground))] flex flex-col animate-slide-in-left shadow-2xl">
              <div className="h-14 flex items-center justify-between px-4 border-b border-[hsl(var(--crm-sidebar-muted))]">
                <span className="text-lg font-bold tracking-tight">
                  <span className="text-[hsl(var(--crm-sidebar-accent))]">Sales</span>CRM
                </span>
                <button onClick={() => setMobileOpen(false)} className="p-1 rounded-md hover:bg-[hsl(var(--crm-sidebar-muted))]">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 py-3 space-y-0.5 px-2 overflow-y-auto">
                {nav.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.url}
                    end={item.url === "/"}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-[hsl(var(--crm-sidebar-foreground))]/70 hover:bg-[hsl(var(--crm-sidebar-muted))] hover:text-[hsl(var(--crm-sidebar-foreground))] transition-colors"
                    activeClassName="bg-[hsl(var(--crm-sidebar-accent))] text-[hsl(var(--sidebar-primary-foreground))] hover:bg-[hsl(var(--crm-sidebar-accent))]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    <span>{item.title}</span>
                  </NavLink>
                ))}
              </nav>
            </aside>
          </div>
        )}
        {/* Expose toggle for TopBar */}
        <MobileMenuButton onOpen={() => setMobileOpen(true)} />
      </>
    );
  }

  // Desktop: collapsible sidebar
  return (
    <aside
      className={`${collapsed ? "w-16" : "w-60"} min-h-screen bg-[hsl(var(--crm-sidebar))] text-[hsl(var(--crm-sidebar-foreground))] flex flex-col transition-all duration-300 flex-shrink-0`}
    >
      <div className="h-14 flex items-center px-4 border-b border-[hsl(var(--crm-sidebar-muted))]">
        {!collapsed && (
          <span className="text-lg font-bold tracking-tight">
            <span className="text-[hsl(var(--crm-sidebar-accent))]">Sales</span>CRM
          </span>
        )}
        {collapsed && <span className="text-lg font-bold text-[hsl(var(--crm-sidebar-accent))] mx-auto">S</span>}
      </div>

      <nav className="flex-1 py-3 space-y-0.5 px-2">
        {nav.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            end={item.url === "/"}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[hsl(var(--crm-sidebar-foreground))]/70 hover:bg-[hsl(var(--crm-sidebar-muted))] hover:text-[hsl(var(--crm-sidebar-foreground))] transition-colors"
            activeClassName="bg-[hsl(var(--crm-sidebar-accent))] text-[hsl(var(--sidebar-primary-foreground))] hover:bg-[hsl(var(--crm-sidebar-accent))] shadow-lg shadow-primary/20"
          >
            <item.icon className="h-4 w-4 flex-shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="h-10 flex items-center justify-center border-t border-[hsl(var(--crm-sidebar-muted))] hover:bg-[hsl(var(--crm-sidebar-muted))] transition-colors"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>
    </aside>
  );
}

// Renders an invisible portal-like element — TopBar picks up via DOM
function MobileMenuButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      id="crm-mobile-menu-btn"
      onClick={onOpen}
      className="fixed top-3 left-3 z-40 p-2 rounded-lg bg-card border border-border shadow-md md:hidden"
    >
      <Menu className="h-5 w-5 text-foreground" />
    </button>
  );
}
