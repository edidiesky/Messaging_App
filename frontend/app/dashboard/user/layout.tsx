import type { Metadata } from "next";
import { userDashboardLinks } from "@/constants";
import DashboardLayout from "@/components/common/DashboardLayout";

export const metadata: Metadata = {
  title: "Inbox || NexChat",
  description: "Connecting people all around the world in a simple fashion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex">
      <DashboardLayout sidebarlinks={userDashboardLinks}>
        {children}
      </DashboardLayout>
    </div>

  );
}
