import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface DrillDownModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  data: Record<string, any>[];
  columns: { key: string; label: string }[];
}

const statusColors: Record<string, string> = {
  hot: "bg-crm-hot/15 text-crm-hot border-crm-hot/30",
  warm: "bg-crm-warm/15 text-crm-warm border-crm-warm/30",
  cold: "bg-crm-cold/15 text-crm-cold border-crm-cold/30",
  open: "bg-crm-open/15 text-crm-open border-crm-open/30",
  qualified: "bg-crm-qualified/15 text-crm-qualified border-crm-qualified/30",
  closed: "bg-crm-closed/15 text-crm-closed border-crm-closed/30",
  pending: "bg-crm-warm/15 text-crm-warm border-crm-warm/30",
  completed: "bg-crm-closed/15 text-crm-closed border-crm-closed/30",
  missed: "bg-crm-missed/15 text-crm-missed border-crm-missed/30",
  scheduled: "bg-primary/15 text-primary border-primary/30",
  cancelled: "bg-muted text-muted-foreground border-border",
};

export function DrillDownModal({ open, onClose, title, data, columns }: DrillDownModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-lg">{title}</DialogTitle>
        </DialogHeader>
        <div className="overflow-auto flex-1">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col) => (
                  <TableHead key={col.key} className="text-xs font-semibold whitespace-nowrap">
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center text-muted-foreground py-8">
                    No records found
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, i) => (
                  <TableRow key={i}>
                    {columns.map((col) => (
                      <TableCell key={col.key} className="text-xs whitespace-nowrap">
                        {col.key === "status" || col.key === "outcome" ? (
                          <Badge
                            variant="outline"
                            className={`text-[10px] ${statusColors[row[col.key]?.toLowerCase()] || ""}`}
                          >
                            {row[col.key]}
                          </Badge>
                        ) : (
                          row[col.key]
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
