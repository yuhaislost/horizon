import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function pet() {
  return (
    <div>
      <div>
        Pet
      </div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="hygiene">Hygiene</TabsTrigger>
          <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
        </TabsList>
        <TabsContent value="food">Buy food here</TabsContent>
        <TabsContent value="hygiene">Buy hygiene here</TabsContent>
        <TabsContent value="entertainment">Buy entertainment here</TabsContent>
      </Tabs>
    </div>
  );
}