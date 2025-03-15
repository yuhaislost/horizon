import { Sidebar } from '@/components/sidebar';

const CoreLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <>
            <Sidebar/>
            <main className='lg:pl-[256px] h-full lg:pt-0 pt-14'>
                { children }
            </main>
        </>
    );
}

export default CoreLayout;