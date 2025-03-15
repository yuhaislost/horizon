import Navbar from "@/components/sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function graveyard({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex w-full h-full justify-center text-white">
            <SidebarProvider className="w-0">
                <Navbar >
                    <main >
                        <SidebarTrigger />
                        {children}
                    </main>
                </Navbar>
            </SidebarProvider>
            <div className="h-vh">Graveyard</div>
        </div>
    )
}