import Navbar from "@/components/navbar";
import Infobar from "@/components/infobar";
import Map from "@/components/map";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full justify-between">
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