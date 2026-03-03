import React, { createContext, useContext, useState, ReactNode } from "react";
import { UserRole } from "@/data/mockData";

interface Filters {
  employeeId: string;
  product: string;
  leadStatus: string;
  meetingStatus: string;
  dateRange: string;
}

interface CRMContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  currentEmployeeId: string;
  setCurrentEmployeeId: (id: string) => void;
  filters: Filters;
  setFilters: (filters: Filters) => void;
  updateFilter: (key: keyof Filters, value: string) => void;
  resetFilters: () => void;
}

const defaultFilters: Filters = {
  employeeId: "all",
  product: "all",
  leadStatus: "all",
  meetingStatus: "all",
  dateRange: "today",
};

const CRMContext = createContext<CRMContextType | undefined>(undefined);

export const CRMProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>("admin");
  const [currentEmployeeId, setCurrentEmployeeId] = useState("e1");
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const updateFilter = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => setFilters(defaultFilters);

  return (
    <CRMContext.Provider
      value={{ role, setRole, currentEmployeeId, setCurrentEmployeeId, filters, setFilters, updateFilter, resetFilters }}
    >
      {children}
    </CRMContext.Provider>
  );
};

export const useCRM = () => {
  const ctx = useContext(CRMContext);
  if (!ctx) throw new Error("useCRM must be used within CRMProvider");
  return ctx;
};
