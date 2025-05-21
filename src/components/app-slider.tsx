import { Sidebar } from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Add your sidebar items here */}
      <Sidebar.Item href="/dashboard">Dashboard</Sidebar.Item>
      <Sidebar.Item href="/settings">Settings</Sidebar.Item>
      {/* Add more items as needed */}
    </Sidebar>
  );
}
