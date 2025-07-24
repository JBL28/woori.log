import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, ShieldCheck, UserRound } from 'lucide-react';
export default function Filter() {
    return (
    <div className="flex flex-col items-center gap-8">

      <Tabs defaultValue="profile" className="text-sm text-muted-foreground">
        <TabsList variant="button">
          <TabsTrigger value="profile">
            <UserRound /> 게시글
          </TabsTrigger>
          <TabsTrigger value="security" disabled>
            <ShieldCheck /> Security
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell /> 팀 게시글
          </TabsTrigger>
        </TabsList>
      </Tabs>

 
    </div>
    )
}