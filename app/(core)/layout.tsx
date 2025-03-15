/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sidebar } from '@/components/sidebar';
import { SoundtrackProvider } from '@/providers/soundtrackProvider';

export default function CoreLayout(({ children } : { children: React.ReactNode }) => {
    
    return (
        <>
            <SoundtrackProvider location='/soundtracks/space1.mp3'/>  
            <Sidebar/>
            <main className='lg:pl-[256px] h-full lg:pt-0 pt-14'>
                <div className='max-w-[1056px] mx-auto p-6 h-full'>
                    { children }
                </div>
            </main>
        </>
    );
})

