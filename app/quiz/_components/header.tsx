import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import { FaXmark } from 'react-icons/fa6'
interface HeaderProps {
    hearts: number;
    percentage: number;
}

export const Header = ({ hearts, percentage } : HeaderProps) => {
    return (
        <header className="lg:pt-5 pt-3 px-10 gap-y-6 flex flex-col items-center justify-between max-w-[1140px] mx-auto w-full">
            <div className='w-full flex flex-row justify-between'>
                <FaXmark className="text-white hover:opacity-75 transition cursor-pointer self-center size-6"/>
                <div className="text-rose-500 flex items-center font-bold">
                    <Image src={'/icons/red-heart.svg'} height={28} width={28} alt="Hearts" className="mr-2"/>
                    <span className="self-center font-bold">{ hearts }</span>
                </div>
            </div>
            <Progress value={percentage}/>
        </header>
    );
}