import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CRMProvider } from "@/contexts/CRMContext";
import { CRMLayout } from "@/components/crm/CRMLayout";
import DashboardPage from "@/pages/DashboardPage";
import {
  LeadsPage, FollowUpsPage, MeetingsPage, AccountsPage,
  ReportsPage, PerformancePage, ProductsPage, AdminPage,
} from "@/pages/PlaceholderPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CRMProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<CRMLayout />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/leads" element={<LeadsPage />} />
              <Route path="/follow-ups" element={<FollowUpsPage />} />
              <Route path="/meetings" element={<MeetingsPage />} />
              <Route path="/accounts" element={<AccountsPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/performance" element={<PerformancePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CRMProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
