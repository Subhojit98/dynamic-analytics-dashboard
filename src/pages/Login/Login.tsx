import { useSelector } from "react-redux"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "../..//components/ui/alert"


import { RootState, useAppDispatch } from "../../store/DataStore"
import { useEffect, useState } from "react"
import { authenticateUser } from "../../api/fetch-data"
import Loader from "../../components/ui/loader"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()
    const [isEmailCopied, setIsEmailCopied] = useState(false)
    const [isPasswordCopied, setIsPasswordCopied] = useState(false)
    const { loading, error, loggedInUser } = useSelector((state: RootState) => state.allUsers)


    const handleFormAction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(authenticateUser(email, password))
    }

    useEffect(() => {
        if (loggedInUser) {
            console.log('logged in user:', loggedInUser)
        }
        if (error) {
            console.log('error:', error)
        }
    }, [loggedInUser, error])

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)

        if (text === "Jeromy.Veum48@gmail.com") {
            setIsEmailCopied(true)
            setTimeout(() => {
                setIsEmailCopied(false)
            }, 1000)
        }
        else {
            setIsPasswordCopied(true)
            setTimeout(() => {
                setIsPasswordCopied(false)
            }, 1000)
        }
    }

    return (


        <div className="text-gray-900 antialiased ">
            {loading ?
                <Loader />

                : <div className="min-h-screen  flex flex-col justify-center sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3] relative">

                    {error && <span className="absolute top-12 mb-5">
                        <Alert variant="destructive">
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                Invalid Credentials or User not found !!
                            </AlertDescription>
                        </Alert>
                    </span>}

                    <Card className="mb-10 w-[95%] sm:w-[65%] lg:w-[30%]">
                        <CardHeader>
                            <CardTitle className="uppercase underline text-center">test Login Credentials</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center w-full justify-between"><p><span className="font-bold mr-3">Email:</span> <span className="text-sm">Jeromy.Veum48@gmail.com</span></p>
                                <button onClick={() => copyToClipboard("Jeromy.Veum48@gmail.com")} className="py-2 px-1 sm:py-3 sm:px-4 group inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                                    <svg className="size-4 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                    </svg>

                                    <svg className="js-clipboard-success hidden size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span className="">{isEmailCopied ? "Copid" : "Copy"}</span>
                                </button>
                            </div>
                            <br />
                            <div className="flex items-center w-full justify-between"><p><span className="font-bold mr-3">Password:</span> u64LhQrvxGAQAjn</p>
                                <button onClick={() => copyToClipboard("u64LhQrvxGAQAjn")} className="py-2 px-1 sm:py-3 sm:px-4 group inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                                    <svg className="size-4 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                    </svg>

                                    <svg className="js-clipboard-success hidden size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span className="">{isPasswordCopied ? "Copid" : "Copy"}</span>
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                    <div>
                        <h2 className="font-bold text-3xl uppercase">welcome<span className="bg-[#f84525] text-white px-2 rounded-md uppercase">back</span></h2>
                    </div>

                    <div className="w-[95%] sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <form onSubmit={handleFormAction}>

                            <div className="py-8">
                                <center>
                                    <span className="text-2xl font-semibold">Log In</span>
                                </center>
                            </div>

                            <div>
                                <label className="block font-medium text-sm text-gray-700" htmlFor="email" />
                                <input type='text'
                                    placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]" />
                            </div>


                            <div className="mt-4">
                                <label className="block font-medium text-sm text-gray-700" htmlFor="password" />
                                <div className="relative">
                                    <input id="password"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password" required className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]' />
                                </div>
                            </div>

                            <div className="flex items-center justify-center mt-4">

                                <button className='ms-4 inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>
                                    Sign In
                                </button>

                            </div>

                        </form>
                    </div>
                </div>}

        </div>
    )
}




export default Login
