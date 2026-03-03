import { CRMSidebar } from "@/components/crm/CRMSidebar";
import { CRMTopBar } from "@/components/crm/CRMTopBar";
import { Outlet } from "react-router-dom";

export function CRMLayout() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <CRMSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <CRMTopBar />
        <main className="flex-1 overflow-auto p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
