import { useEffect } from 'react'
import UsersLineChart from './UsersLineChart'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import UsersPieChart from './UsersPieChart'
import UsersBarChart from './UsersBarChart'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../store/DataStore'
import { fetAllUserData } from '../api/fetch-data'
import Loader from './ui/loader'
import Error from './ui/error'


const Analytics = () => {

    const dispatch = useAppDispatch()

    const { usersData, activeUsers, error, loading, deletedUsersCount } = useSelector((state: RootState) => state.usersAnalyticsData)

    console.log(deletedUsersCount)
    useEffect(() => {
        dispatch(fetAllUserData())
    }, [])
    return (
        <div>
            {
                loading ?
                    <Loader />
                    :
                    <div className="w-full h-[90vh] overflow-y-auto flex flex-col items-center gap-y-10" style={{ display: error ? "none" : "block" }}>

                        <div className="flex justify-evenly w-[95%] h-32 md:h-52 mt-4">
                            <Card className='w-24 sm:w-44 md:w-80 rounded-sm bg-[#08D9D6]'>
                                <CardHeader>
                                    <CardTitle className='text-sm sm:text-lg md:text-3xl font-thin'>Total Users</CardTitle>
                                </CardHeader>
                                <CardContent className='sm:text-xl md:text-3xl font-bold'>
                                    {usersData.length}
                                </CardContent>
                            </Card>
                            <Card className='w-24 sm:w-44 md:w-80 rounded-sm bg-[#252A34] text-white'>
                                <CardHeader>
                                    <CardTitle className='text-sm sm:text-lg md:text-3xl font-thin'>Active Users</CardTitle>
                                </CardHeader>
                                <CardContent className='sm:text-xl md:text-3xl font-bold'>
                                    {activeUsers.length}
                                </CardContent>
                            </Card>
                            <Card className='w-24 sm:w-44 md:w-80 rounded-sm bg-[#FF2E63]'>
                                <CardHeader>
                                    <CardTitle className='text-sm sm:text-lg md:text-3xl font-thin'>Deleted Users</CardTitle>
                                </CardHeader>
                                <CardContent className='sm:text-xl md:text-3xl font-bold'>
                                    {deletedUsersCount}
                                </CardContent>
                            </Card>

                        </div>

                        <div className="w-full h-3/4 p-4 flex flex-col gap-16">
                            <UsersLineChart allData={usersData} />
                            <UsersPieChart comparisonData={usersData} />
                            <UsersBarChart userRegionData={usersData} />
                        </div>

                    </div>}
            {
                error && <Error error={error} />
            }
        </div>
    )
}

export default Analytics
