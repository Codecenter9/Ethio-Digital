import DashboardLayout from "@/Layouts/DashboardLayout/Dashboard";
import React from "react";

const Dashboard = () => {
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Dashboard;

Dashboard.layout = (page) => <DashboardLayout>{page}</DashboardLayout>;
