import { useCRM } from "@/contexts/CRMContext";
import { employees } from "@/data/mockData";
import { Search, Bell, User } from "lucide-react";
import { useState } from "react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export function CRMTopBar() {
  const { role, setRole } = useCRM();
  const [search, setSearch] = useState("");

  return (
    <header className="h-14 bg-card border-b border-border flex items-center px-4 gap-4 flex-shrink-0">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search leads, clients, contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm bg-secondary rounded-md border-0 outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex items-center gap-3 ml-auto">
        {/* Role Switcher (for demo) */}
        <Select value={role} onValueChange={(v) => setRole(v as "admin" | "employee")}>
          <SelectTrigger className="w-[140px] h-8 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin View</SelectItem>
            <SelectItem value="employee">Employee View</SelectItem>
          </SelectContent>
        </Select>

        {/* Notifications */}
        <button className="relative p-2 rounded-md hover:bg-secondary transition-colors">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-crm-hot rounded-full" />
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium">{role === "admin" ? "Admin User" : employees[0].name}</p>
            <Badge variant="outline" className="text-[10px] px-1.5 py-0">
              {role}
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
}
