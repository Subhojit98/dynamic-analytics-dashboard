import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Filter } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"
import { useState } from "react";
import { SingleUser } from "../interface/apiDataTypes";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const yearsList = [

    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024
]
const UsersLineChart = ({ allData }: { allData: SingleUser[] }) => {
    const [monthsCount, setmonthsCount] = useState(5)
    const [year, setYear] = useState(new Date().getFullYear())
    const getLastSixMonths = () => {
        const months = [];
        const now = new Date();
        for (let i = Number(monthsCount); i >= 0; i--) {
            const date = new Date(year, now.getMonth() - i, 1);
            months.push(date.toLocaleString("default", { month: "short", year: "numeric" }));
        }
        return months;
    };
    const lastSixMonths = getLastSixMonths();

    const registrationsByMonth = lastSixMonths.map((month) => {
        return allData.filter((user) => {
            const regDate = new Date(user.registration_date);
            const regMonth = regDate.toLocaleString("default", { month: "short", year: "numeric" });
            return regMonth === month;
        }).length;
    });


    const data = {
        labels: lastSixMonths,

        datasets: [
            {

                label: "User Registrations",
                data: registrationsByMonth,
                borderColor: "#4F46E5",
                backgroundColor: "rgba(79, 70, 229, 0.2)",
                tension: 0.4,
                pointBackgroundColor: "#4F46E5",
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: { display: true },
        },
        scales: {
            x: { title: { display: true, text: "Months" } },
            y: { title: { display: true, text: "Registrations" } },
        },
    };

    return (
        <>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold ml-5 mt-2 text-center">User Registration Trend (over {Number(monthsCount) + 1} Months)</h1>
            <div className="flex justify-center items-center gap-3">
                <div className="gap-3 sm:flex items-center hidden"><Filter />Filter by: </div>
                <Select onValueChange={(e: number) => setmonthsCount(e)}>
                    <SelectTrigger className="w-44">
                        <SelectValue placeholder="Date Range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2">Last 3 Months</SelectItem>
                        <SelectItem value="5">Last 6 Months</SelectItem>
                        <SelectItem value="11">Last 12 Months</SelectItem>
                    </SelectContent>
                </Select>
                <Select onValueChange={(e: number) => setYear(e)}>
                    <SelectTrigger className="w-44">
                        <SelectValue placeholder="Year Range" />
                    </SelectTrigger>
                    <SelectContent>
                        {yearsList.map((value, i) => {
                            return <SelectItem key={i} value={`${value}`}>{value}</SelectItem>
                        })}

                    </SelectContent>
                </Select>
            </div >
            <br />
            <br />
            <div className="max-w-4xl w-full mx-auto">
                <Line data={data} options={options} />
            </div>
        </>
    );
}

export default UsersLineChart