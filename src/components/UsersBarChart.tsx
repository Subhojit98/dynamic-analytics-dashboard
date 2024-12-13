import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { Filter } from "lucide-react";
import { SingleUser } from '../interface/apiDataTypes';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const regionsList = [
    "Nigeria",
    "San Marino",
    "Kiribati",
    "India",
    "Mauritius",
    "Saudi Arabia",
    "Monaco",
    "Cayman Islands",
    "Cuba",
    "Eritrea",
    "Globe"
];

const UsersBarChart = ({ userRegionData }: { userRegionData: SingleUser[] }) => {
    const [regionName, setRegionName] = useState("");

    const selectedRegion = userRegionData.filter((data: SingleUser) => data.Region === regionName);

    const regionData = selectedRegion.length ? selectedRegion : userRegionData;

    const regionCounts = regionData.reduce((acc: { [key: string]: number }, user: SingleUser) => {
        acc[user.Region] = (acc[user.Region] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(regionCounts);
    const dataCounts = Object.values(regionCounts);

    const data = {
        labels,
        datasets: [
            {
                label: "Number of Users",
                data: dataCounts,
                backgroundColor: "#4F46E5",
                borderColor: "#00000",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Regions',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Number of Users',
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <>
            <h1 className="text-3xl font-bold ml-5 mt-2 text-center">Active vs Inactive Users (World Wide)</h1>
            <div className="flex justify-center items-center gap-3">
                <div className="gap-3 flex items-center"><Filter />Filter by: </div>
                <Select onValueChange={(e: string) => setRegionName(e)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Region" />
                    </SelectTrigger>
                    <SelectContent>
                        {regionsList.map((value, i) => {
                            return <SelectItem key={i} value={value}>{value}</SelectItem>
                        })}
                    </SelectContent>
                </Select>
            </div>

            <br />
            <br />
            <div className="w-full max-w-4xl mx-auto">
                <Bar data={data} options={options} />
            </div>
        </>
    );
};

export default UsersBarChart;