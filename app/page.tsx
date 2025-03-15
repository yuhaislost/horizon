import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Home() {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>(Username)</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Profile</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Settings</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
