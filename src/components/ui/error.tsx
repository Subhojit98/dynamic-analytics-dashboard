import { ClockAlert } from 'lucide-react'

const Error = ({ error }: { error: string }) => {
    return (
        <div className='w-full h-[60vh] flex flex-col justify-center items-center gap-5'>
            <ClockAlert color='#e01b24' size={30} />
            <span className='text-2xl text-red-500 font-bold text-center'>{error ? error : "Opps Somthing Went Wrong !!"}</span>
        </div>
    )
}

export default Error
