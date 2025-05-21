import { DataTable } from "@/components/ui/data-table";
import data from "../data/data.json";

export function DashboardDataTable() {
  return (
    <DataTable data={data} />
  );
}
