import Navbar from "@/components/sidebar";
import Infobar from "@/components/infobar";
import Map from "@/components/map";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full justify-between bg-[#0F111C]">
      <SidebarProvider className="w-0">
        <Navbar >
          <main >
            <SidebarTrigger />
            {children}
          </main>
        </Navbar>
      </SidebarProvider>
      
      <Map></Map>
      <Infobar></Infobar>
    </div>
  );
}