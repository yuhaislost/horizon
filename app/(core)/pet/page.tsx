import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SideWrapper } from "@/components/side-wrapper";
import { UserStats } from "@/components/user-stats";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function pet() {
  return (
    <div className="flex flex-col h-full">
      <SideWrapper>
        <UserStats hearts={1} streaks={1} coins={1} />
      </SideWrapper>

      <div className="border-1 rounded-lg p-10 m-10 w-[750px] h-full flex flex-col gap-2">
        <Card className="bg-transparent text-white">
          <CardHeader>PET SHOP</CardHeader>
        </Card>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="hygiene">Hygiene</TabsTrigger>
            <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
          </TabsList>
          <TabsContent value="food">
            <Card className="bg-transparent text-white">
              <CardHeader>
                <CardDescription>
                  Purchase food to increase the hunger of your pet!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                Food Unavailable. Pets unlock after 10 Streaks.
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>

          </TabsContent>
          <TabsContent value="hygiene">
            <Card className="bg-transparent text-white">
              <CardHeader>
                <CardDescription>
                  Purchase hygiene services to increase the hygiene of your pet!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                Hygiene Unavailable. Pets unlock after 10 Streaks.
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="entertainment">
            <Card className="bg-transparent text-white">
              <CardHeader>
                <CardDescription>
                  Purchase entertainment products and services to increase the entertainment of your pet!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                Entertainment Unavailable. Pets unlock after 10 Streaks.
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>

  );
}