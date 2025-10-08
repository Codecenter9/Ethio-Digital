import DashboardLayout from "@/Layouts/DashboardLayout/Dashboard";
import { Head } from "@inertiajs/react";
import React from "react";

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div>
                <h1>hello</h1>
            </div>
        </>
    );
};

export default Dashboard;

Dashboard.layout = (page) => <DashboardLayout>{page}</DashboardLayout>;
