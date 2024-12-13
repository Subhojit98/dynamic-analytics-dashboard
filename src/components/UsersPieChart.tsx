import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const UsersPieChart = ({ comparisonData }) => {

    const analyticalDataOfUserStatus = comparisonData
    const activeUsers = analyticalDataOfUserStatus?.filter((user) => user?.status).length;
    const inactiveUsers = analyticalDataOfUserStatus.length - activeUsers;

    // Chart data
    const data = {
        labels: ["Active Users", "Inactive Users"],
        datasets: [
            {
                data: [activeUsers, inactiveUsers],
                backgroundColor: ["#34D399", "#F87171"], // Colors for active and inactive users
                hoverBackgroundColor: ["#10B981", "#EF4444"], // Hover colors
                borderWidth: 2,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: { display: true, position: "top" },
            tooltip: { enabled: true },
        },
    };

    return (

        <>

            <h1 className="text-3xl font-bold ml-5 mt-2 text-center">Active vs Inactive Users</h1>
            <br />
            <br />
            <div className="w-full max-w-md mx-auto">
                <Pie data={data} options={options} />
            </div>
        </>

    );
};

export default UsersPieChart;
