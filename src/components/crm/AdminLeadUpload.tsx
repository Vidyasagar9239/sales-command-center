import { useState } from "react";
import { Upload, FileSpreadsheet, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { employees } from "@/data/mockData";
import { toast } from "sonner";

export function AdminLeadUpload() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"upload" | "preview" | "assign">("upload");
  const [distribution, setDistribution] = useState("equal");

  const handleUpload = () => {
    setStep("preview");
  };

  const handleAssign = () => {
    toast.success("15 leads assigned successfully!", { description: "Leads distributed to employees" });
    setOpen(false);
    setStep("upload");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setStep("upload"); }}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Upload className="h-4 w-4" /> Upload Calling Data
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileSpreadsheet className="h-5 w-5 text-primary" />
            {step === "upload" && "Upload Lead Data"}
            {step === "preview" && "Preview & Deduplicate"}
            {step === "assign" && "Assign Leads"}
          </DialogTitle>
        </DialogHeader>

        {step === "upload" && (
          <div className="space-y-4">
            <div
              className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
              onClick={handleUpload}
            >
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm font-medium">Click to upload Excel/CSV</p>
              <p className="text-xs text-muted-foreground mt-1">or drag and drop</p>
            </div>
          </div>
        )}

        {step === "preview" && (
          <div className="space-y-4">
            <div className="bg-secondary rounded-lg p-4">
              <div className="flex justify-between text-sm">
                <span>Total Leads Found</span><span className="font-bold">18</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Duplicates Removed</span><span className="font-bold text-crm-warm">3</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>New Leads to Import</span><span className="font-bold text-crm-closed">15</span>
              </div>
            </div>
            <Button className="w-full" onClick={() => setStep("assign")}>
              Continue to Assignment
            </Button>
          </div>
        )}

        {step === "assign" && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Distribution Method</label>
              <Select value={distribution} onValueChange={setDistribution}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="equal">Equal Distribution</SelectItem>
                  <SelectItem value="manual">Manual Assignment</SelectItem>
                  <SelectItem value="percentage">Percentage Allocation</SelectItem>
                  <SelectItem value="product">Product-wise Assignment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="bg-secondary rounded-lg p-4 space-y-2">
              {employees.map((emp) => (
                <div key={emp.id} className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Users className="h-3 w-3" /> {emp.name}
                  </span>
                  <span className="font-bold">3 leads</span>
                </div>
              ))}
            </div>
            <Button className="w-full gap-2" onClick={handleAssign}>
              <CheckCircle className="h-4 w-4" /> Assign Leads
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
