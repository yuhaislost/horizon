import Navbar from "@/components/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Home({children}: {children:React.ReactNode}) {
  return (
    <>
      <SidebarProvider>
        <Navbar>
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </Navbar>
      </SidebarProvider>
    </>
  );
}
