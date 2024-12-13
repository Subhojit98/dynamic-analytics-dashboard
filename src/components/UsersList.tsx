import { Trash2 } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../components/ui/pagination"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { deleteUserById, fetchAllUsers, searchUserQuery, setCurrentuser } from "../api/fetch-data"
import { RootState, useAppDispatch } from "../store/DataStore"
import Loader from "./ui/loader"
import Error from "./ui/error"


const UsersList = () => {

    const [pageCount, setPageCount] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")
    const [isUserDetails, setIsUserDetails] = useState(false)
    // const [deletedUserCount, setDeletedUserCount] = useState(0)

    const dispatch = useAppDispatch()
    const { users, error, loading, currentUser } = useSelector((state: RootState) => state.allUsers)

    const handlePreviousCount = () => {
        if (pageCount > 1) {
            setPageCount(pageCount - 1)
        }
    }
    const handleNextCount = () => {
        if (pageCount < 10) {
            setPageCount(pageCount + 1)
        }
    }

    const handleDeleteUser = (id: string) => {
        dispatch(deleteUserById(id))
    }

    const handelSelectUser = (id: string) => {
        setIsUserDetails(true)
        dispatch(setCurrentuser(id))

    }
    useEffect(() => {
        let timer: NodeJS.Timeout | number;
        if (searchQuery.length > 0) {
            timer = setTimeout(() => {
                dispatch(searchUserQuery(searchQuery))
            }, 1000)
        }
        else {
            dispatch(fetchAllUsers(pageCount))
        }

        return () => clearTimeout(timer)

    }, [searchQuery])

    useEffect(() => {
        dispatch(fetchAllUsers(pageCount))
    }, [pageCount])

    return (
        <div className="w-full h-full">

            <div className="flex justify-between items-center w-full p-5 bg-[#08D9D6] mb-2">
                <h2 className="hidden text-2xl font-bold sm:block">Users List</h2>
                <div className="items-center gap-2 sm:flex"><span className="mr-3 hidden sm:block">Search by</span>
                    <input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="text" className="p-3  outline-none rounded-md textc" placeholder="email or name" />
                </div>
            </div>
            {error ?
                <Error error={error} />

                :

                <div className="mx-2 m-auto">
                    {loading ?

                        <Loader />
                        :
                        <Table>
                            <TableHeader>
                                <TableRow className="hover:bg-slate-200">
                                    <TableHead className="">ID</TableHead>
                                    <TableHead className="">Name</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="">Region</TableHead>
                                    <TableHead className="">Gender</TableHead>
                                    <TableHead className="w-20">Email</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                {

                                    users.map((user) => {

                                        const { first_name, last_name, status, Region, gender, email, id } = user
                                        return <TableRow key={id} onClick={() => handelSelectUser(id)} className="hover:bg-[#FF2E63] hover:text-white">
                                            <TableCell>{id}</TableCell>
                                            <TableCell className="font-medium">{`${first_name} ${last_name}`}</TableCell>
                                            <TableCell>{status ? "Active" : "Inactive"}</TableCell>
                                            <TableCell>{Region}</TableCell>
                                            <TableCell className="">{gender}</TableCell>
                                            <TableCell className="">{email}</TableCell>
                                            <TableCell className=""><button onClick={() => handleDeleteUser(id)}><Trash2 /></button></TableCell>
                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>}

                    {!loading && <Pagination className="mt-10">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious onClick={handlePreviousCount} />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink>{pageCount}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext onClick={handleNextCount} />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>}

                </div>}

            {
                isUserDetails &&
                <div className="fixed top-40 flex justify-center w-[95%] sm:w-full h-[60vh] px-2 md:w-3/5 md:h-[55vh] md:right-0 xl:w-3/12 text-white bg-gray-600">
                    <div className=" w-full h-full flex items-center justify-center">

                        <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center space-x-3">

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">{`${currentUser?.first_name} ${currentUser?.last_name}`}</h2>
                                    <p className="text-gray-600">{currentUser?.email}</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-700">
                                    <span className="font-semibold">ID:</span> {currentUser?.id}
                                    <span className="font-semibold float-right">Status: {currentUser?.status ? "Active" : `Inavtive`}</span>
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">First Name:</span> {currentUser?.first_name}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Last Name:</span> {currentUser?.last_name}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Gender:</span> {currentUser?.gender}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Region:</span> {currentUser?.Region}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Joining Date:</span> {new Date(currentUser?.registration_date ? currentUser.registration_date : "10/10/2010").toDateString()}
                                </p>
                            </div>
                            <div className="mt-4 flex space-x-2">
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => setIsUserDetails(false)}>Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div >
    )
}

export default UsersList
