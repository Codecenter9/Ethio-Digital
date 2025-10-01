import { useState } from "react";
import Sidebar from "@/Components/Admin/layout/SideBar";
import Topbar from "@/Components/Admin/layout/TopBar";

export default function DashboardLayout({ children }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                setIsCollapsed={setIsSidebarCollapsed}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
            />

            <div
                className={`flex-1 flex flex-col transition-all duration-300 ${
                    isSidebarCollapsed ? "md:ml-20" : "md:ml-64"
                }`}
            >
                <Topbar
                    onMenuClick={() => setIsMobileOpen(!isMobileOpen)}
                    isSidebarCollapsed={isSidebarCollapsed}
                    onToggleSidebar={() =>
                        setIsSidebarCollapsed(!isSidebarCollapsed)
                    }
                />

                {/* Page Content */}
                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
