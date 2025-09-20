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
  ChevronUp,
  Circle,
  AlertTriangle,
  Square,
  File,
  Clock,
  Bookmark,
  Moon,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";
import walterAvatar from "@/assets/walter-avatar.jpg";

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
          <div className="relative">
            <img 
              src={walterAvatar} 
              alt="Walter" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="absolute top-0 right-0 w-3 h-3 bg-task-green rounded-full border border-sidebar-bg"></div>
          </div>
          {!collapsed && (
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Walter</h3>
              <p className="text-sm text-muted-foreground">Designer Pro+</p>
            </div>
          )}
          {!collapsed && (
            <div className="flex gap-1">
              <button className="w-6 h-6 rounded-full hover:bg-sidebar-hover flex items-center justify-center">
                <Plus className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-6 h-6 rounded-full hover:bg-sidebar-hover flex items-center justify-center">
                <Settings className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          )}
        </div>
        
        {!collapsed && (
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text"
              value="Redesign App"
              className="w-full pl-10 pr-8 py-2 bg-secondary rounded-lg text-sm text-muted-foreground border-0 focus:outline-none focus:ring-1 focus:ring-primary"
              readOnly
            />
            <Star className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-task-yellow fill-current" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-primary-foreground cursor-pointer mb-2"
            onClick={() => setProjectBoardOpen(!projectBoardOpen)}
          >
            <FolderOpen className="w-4 h-4" />
            {!collapsed && (
              <>
                <span className="flex-1">Project Board</span>
                <ChevronUp className="w-4 h-4" />
              </>
            )}
          </div>
          
          {projectBoardOpen && !collapsed && (
            <div className="space-y-1">
              <div className="flex items-center gap-3 px-6 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
                <Square className="w-3 h-3 text-muted-foreground" />
                <span className="text-foreground text-sm flex-1">Edu Design Landing</span>
                <span className="text-xs bg-destructive text-destructive-foreground px-1.5 py-0.5 rounded font-medium">4</span>
              </div>
              
              <div>
                <div 
                  className="flex items-center gap-3 px-6 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer"
                  onClick={() => setTeamProjectOpen(!teamProjectOpen)}
                >
                  <Circle className="w-3 h-3 text-muted-foreground" />
                  <span className="text-foreground text-sm flex-1">Team</span>
                </div>
                
                {teamProjectOpen && (
                  <div className="ml-6 pl-4">
                    <div className="flex flex-col gap-2 py-2">
                      <div className="w-8 h-8 rounded-full bg-task-blue border-2 border-sidebar-bg overflow-hidden">
                        <img src={walterAvatar} alt="Team member" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-task-pink border-2 border-sidebar-bg"></div>
                      <div className="w-8 h-8 rounded-full bg-task-green border-2 border-sidebar-bg"></div>
                      <div className="w-8 h-8 rounded-full bg-task-yellow border-2 border-sidebar-bg"></div>
                      <div className="w-8 h-8 rounded-full bg-secondary border-2 border-sidebar-bg"></div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-3 px-6 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
                <AlertTriangle className="w-3 h-3 text-task-yellow" />
                <span className="text-muted-foreground text-sm">Tripple Website</span>
              </div>
              
              <div className="flex items-center gap-3 px-6 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer">
                <Circle className="w-3 h-3 text-muted-foreground" />
                <span className="text-foreground text-sm flex-1">Social App</span>
                <span className="text-xs bg-task-green text-white px-1.5 py-0.5 rounded font-medium">3</span>
              </div>
              
              <div className="flex items-center gap-3 px-6 py-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer text-primary">
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
                <span className="text-foreground flex-1">Schedule</span>
                <span className="text-xs text-muted-foreground">June, 28, 2023</span>
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
                <span className="text-foreground flex-1">Activities</span>
                <span className="text-xs bg-task-green text-white px-2 py-0.5 rounded font-medium">New</span>
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
                <span className="text-foreground flex-1">Inbox</span>
                <span className="text-xs text-muted-foreground mr-2">26</span>
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-task-blue border border-sidebar-bg"></div>
                  <div className="w-5 h-5 rounded-full bg-task-pink border border-sidebar-bg"></div>
                  <div className="w-5 h-5 rounded-full bg-task-green border border-sidebar-bg"></div>
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
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <File className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <Clock className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <Inbox className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <Bookmark className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Moon className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
          
          <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
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