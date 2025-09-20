import { ProjectSidebar } from "@/components/ProjectSidebar";
import { TopNavbar, ViewToolbar } from "@/components/TopNavbar";
import { CalendarView } from "@/components/CalendarView";
import { ProjectInsights } from "@/components/ProjectInsights";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex h-screen">
        {/* Sidebar */}
        <ProjectSidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <TopNavbar />
          <ViewToolbar />
          
          {/* Main Content Area */}
          <div className="flex flex-1 overflow-hidden">
            <CalendarView />
            <ProjectInsights />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
