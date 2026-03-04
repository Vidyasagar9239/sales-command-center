import { useCRM } from "@/contexts/CRMContext";
import { employees } from "@/data/mockData";
import { Search, Bell, User, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

export function CRMTopBar() {
  const { role, setRole } = useCRM();
  const [search, setSearch] = useState("");
  const isMobile = useIsMobile();

  return (
    <header className={`h-14 bg-card/80 backdrop-blur-md border-b border-border flex items-center px-4 gap-3 flex-shrink-0 sticky top-0 z-30 ${isMobile ? "pl-14" : ""}`}>
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder={isMobile ? "Search..." : "Search leads, clients, contacts..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm bg-secondary/80 rounded-lg border-0 outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground transition-all"
        />
      </div>

      <div className="flex items-center gap-2 ml-auto">
        {/* Role Switcher */}
        <Select value={role} onValueChange={(v) => setRole(v as "admin" | "employee")}>
          <SelectTrigger className={`h-8 text-xs ${isMobile ? "w-[100px]" : "w-[140px]"}`}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin View</SelectItem>
            <SelectItem value="employee">Employee View</SelectItem>
          </SelectContent>
        </Select>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-crm-hot rounded-full animate-pulse" />
        </button>

        {/* User */}
        {!isMobile && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md shadow-primary/20">
              <User className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-medium">{role === "admin" ? "Admin User" : employees[0].name}</p>
              <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                {role}
              </Badge>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
