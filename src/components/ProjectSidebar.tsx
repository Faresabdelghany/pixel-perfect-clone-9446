import { useState } from "react";
import { 
  Search, 
  Star, 
  LayoutDashboard, 
  FolderOpen, 
  Calendar,
  Activity,
  Inbox,
  Plus,
  ChevronRight,
  ChevronDown,
  Circle,
  Triangle,
  CheckSquare,
  File,
  Globe,
  Smartphone,
  Image as ImageIcon,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed?: boolean;
}

export function ProjectSidebar({ collapsed = false }: SidebarProps) {
  const [projectBoardOpen, setProjectBoardOpen] = useState(true);
  const [teamProjectOpen, setTeamProjectOpen] = useState(true);

  return (
    <div className={cn(
      "h-full bg-sidebar-bg border-r border-border flex flex-col transition-all duration-300",
      collapsed ? "w-16" : "w-80"
    )}>
      {/* User Profile Section */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-task-purple flex items-center justify-center">
            <span className="text-white font-semibold text-lg">W</span>
          </div>
          {!collapsed && (
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Walter</h3>
              <p className="text-sm text-muted-foreground">Designer Pro+</p>
            </div>
          )}
        </div>
        
        {!collapsed && (
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Redesign App"
              className="w-full pl-10 pr-8 py-2 bg-secondary rounded-lg text-sm placeholder-muted-foreground border-0 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Star className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-task-yellow fill-current" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Overview Section */}
        <div>
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            {collapsed ? "O" : "OVERVIEW"}
          </h4>
          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
              <LayoutDashboard className="w-4 h-4 text-muted-foreground" />
              {!collapsed && <span className="text-foreground">Dashboard</span>}
              {!collapsed && <div className="w-2 h-2 bg-orange-500 rounded-full ml-auto"></div>}
            </div>
          </div>
        </div>

        {/* Project Board Section */}
        <div>
          <div 
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground cursor-pointer mb-2"
            onClick={() => setProjectBoardOpen(!projectBoardOpen)}
          >
            <FolderOpen className="w-4 h-4" />
            {!collapsed && (
              <>
                <span className="flex-1">Project Board</span>
                {projectBoardOpen ? 
                  <ChevronDown className="w-4 h-4" /> : 
                  <ChevronRight className="w-4 h-4" />
                }
              </>
            )}
          </div>
          
          {projectBoardOpen && !collapsed && (
            <div className="ml-4 space-y-1">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
                <CheckSquare className="w-3 h-3 text-muted-foreground" />
                <span className="text-foreground text-sm">Edu Design Landing</span>
                <span className="ml-auto text-xs bg-destructive text-destructive-foreground px-1.5 py-0.5 rounded">4</span>
              </div>
              
              <div>
                <div 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer"
                  onClick={() => setTeamProjectOpen(!teamProjectOpen)}
                >
                  <Circle className="w-3 h-3 text-muted-foreground" />
                  <span className="text-foreground text-sm">Team Project</span>
                  {teamProjectOpen ? 
                    <ChevronDown className="w-3 h-3 ml-auto" /> : 
                    <ChevronRight className="w-3 h-3 ml-auto" />
                  }
                </div>
                
                {teamProjectOpen && (
                  <div className="ml-6 space-y-1 mt-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
                      <Globe className="w-3 h-3 text-muted-foreground" />
                      <span className="text-foreground text-sm">Website</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
                      <Smartphone className="w-3 h-3 text-muted-foreground" />
                      <span className="text-foreground text-sm">Apps</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
                      <ImageIcon className="w-3 h-3 text-muted-foreground" />
                      <span className="text-foreground text-sm">Dribbble Shot</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
                <Triangle className="w-3 h-3 text-task-yellow" />
                <span className="text-foreground text-sm">Ripple Website</span>
              </div>
              
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
                <Circle className="w-3 h-3 text-muted-foreground" />
                <span className="text-foreground text-sm">Social App</span>
                <span className="ml-auto text-xs bg-task-green text-white px-1.5 py-0.5 rounded">3</span>
              </div>
              
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer text-primary">
                <Plus className="w-3 h-3" />
                <span className="text-sm">Create New Board</span>
              </div>
            </div>
          )}
        </div>

        {/* Schedule */}
        <div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            {!collapsed && (
              <>
                <span className="text-foreground">Schedule</span>
                <span className="text-xs text-muted-foreground ml-auto">June, 28, 2023</span>
              </>
            )}
          </div>
        </div>

        {/* Activities */}
        <div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
            <Activity className="w-4 h-4 text-muted-foreground" />
            {!collapsed && (
              <>
                <span className="text-foreground">Activities</span>
                <span className="text-xs bg-task-green text-white px-1.5 py-0.5 rounded ml-auto">New</span>
              </>
            )}
          </div>
        </div>

        {/* Inbox */}
        <div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
            <Inbox className="w-4 h-4 text-muted-foreground" />
            {!collapsed && (
              <>
                <span className="text-foreground">Inbox</span>
                <span className="text-xs text-muted-foreground ml-auto">26</span>
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-task-blue border border-background"></div>
                  <div className="w-5 h-5 rounded-full bg-task-pink border border-background"></div>
                  <div className="w-5 h-5 rounded-full bg-task-green border border-background"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Onboarding Section */}
      {!collapsed && (
        <div className="p-4 border-t border-border">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            ONBOARDING
          </h4>
          <div className="flex gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
              <File className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
              <Calendar className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
              <Inbox className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
              <Globe className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center ml-auto">
              <Users className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
          
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Plus className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-1">Add New Project</h3>
            <p className="text-sm text-muted-foreground">Or use invite link</p>
          </div>
        </div>
      )}
    </div>
  );
}