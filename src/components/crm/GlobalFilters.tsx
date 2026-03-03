import { useCRM } from "@/contexts/CRMContext";
import { employees, products } from "@/data/mockData";
import { Filter, RotateCcw } from "lucide-react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function GlobalFilters() {
  const { filters, updateFilter, resetFilters, role } = useCRM();

  return (
    <div className="crm-filter-bar">
      <div className="flex items-center gap-2 mb-3">
        <Filter className="h-4 w-4 text-primary" />
        <span className="text-sm font-semibold">Filters</span>
        <Button variant="ghost" size="sm" className="ml-auto h-7 text-xs" onClick={resetFilters}>
          <RotateCcw className="h-3 w-3 mr-1" /> Reset
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {role === "admin" && (
          <Select value={filters.employeeId} onValueChange={(v) => updateFilter("employeeId", v)}>
            <SelectTrigger className="h-9 text-xs">
              <SelectValue placeholder="Employee" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Employees</SelectItem>
              {employees.map((e) => (
                <SelectItem key={e.id} value={e.id}>{e.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        <Select value={filters.product} onValueChange={(v) => updateFilter("product", v)}>
          <SelectTrigger className="h-9 text-xs">
            <SelectValue placeholder="Product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Products</SelectItem>
            {products.map((p) => (
              <SelectItem key={p} value={p}>{p}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.leadStatus} onValueChange={(v) => updateFilter("leadStatus", v)}>
          <SelectTrigger className="h-9 text-xs">
            <SelectValue placeholder="Lead Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="qualified">Qualified</SelectItem>
            <SelectItem value="hot">Hot</SelectItem>
            <SelectItem value="warm">Warm</SelectItem>
            <SelectItem value="cold">Cold</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.meetingStatus} onValueChange={(v) => updateFilter("meetingStatus", v)}>
          <SelectTrigger className="h-9 text-xs">
            <SelectValue placeholder="Meeting Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Meetings</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="missed">Missed</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.dateRange} onValueChange={(v) => updateFilter("dateRange", v)}>
          <SelectTrigger className="h-9 text-xs">
            <SelectValue placeholder="Date Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="7days">Last 7 Days</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
            <SelectItem value="all">All Time</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
