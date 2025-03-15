"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useState } from "react";
import { UsersPlaceholder } from "@/components/placeholder_data";
import Navbar from "@/components/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function leaderboard({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState(UsersPlaceholder)

  return (
    <div className="flex justify-center items-center h-vh">
      <SidebarProvider className="w-0">
        <Navbar >
          <main >
            <SidebarTrigger />
            {children}
          </main>
        </Navbar>
      </SidebarProvider>

      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {users.map((user, i = 0) => {
            return (
              <>
                <div key={user.id} className="text-sm">
                  {i + 1}. {user.username}
                </div>
                <Separator className="my-2" />
              </>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  );
}