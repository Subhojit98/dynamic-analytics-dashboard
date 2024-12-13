import { ChartSpline, User } from "lucide-react"
import avtarImage from '../../assets/joshua-rawson-harris-YNaSz-E7Qss-unsplash.jpg'
import UsersList from "../../components/UsersList"
import Analytics from "../../components/Analytics"
import { useState } from "react"
const Home = () => {
    const [isClicked, setIsClicked] = useState(true)
    return (
        <>

            <div className="w-full h-screen flex">
                <aside className="w-[12%]  bg-[#252A34] h-full rounded-r-3xl relative border-2 border-black">

                    <h1 className="pt-10 text-center text-sm xl:text-lg font-bold text-white hidden md:block">DASH BOARD</h1>
                    <ul className="absolute top-52 w-full flex flex-col gap-8 m-auto">
                        <li className="flex text-lg xl:px-6 lg:px-0 w-full hover:bg-[#FF2E63] border-t border-b border-white py-4 cursor-pointer items-center justify-between text-white" onClick={() => setIsClicked(true)}><span><User /></span><span className="hidden lg:block lg:text-sm 2xl:text-base">User Management</span></li>
                        <li className="flex text-lg justify-between xl:px-8 lg:px-0 py-4 hover:bg-[#FF2E63] border-t border-b border-white cursor-pointer items-center text-white" onClick={() => setIsClicked(false)}><span><ChartSpline /></span><span className="hidden lg:block lg:text-sm 2xl:text-base">User Analytics</span></li>
                    </ul>
                </aside>

                <main className="w-[88%] h-full bg-[#EAEAEA]">

                    <div className="w-40 h-16 mt-2 md:mt-5 float-right flex gap-5 md:justify-between md:px-3 items-center"><img src={avtarImage} className="w-10 h-10 object-contain rounded-full bg-black" alt="" /><span className="text-sm">JOHN DOE</span></div>
                    {/* it will be chaged when sidebar clicked -> */}
                    {
                        isClicked ? <UsersList /> : <Analytics />
                    }

                </main>

            </div>
        </>
    )
}

export default Home
