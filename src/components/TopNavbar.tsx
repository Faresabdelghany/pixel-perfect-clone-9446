import { 
  Search, 
  Share, 
  ChevronDown, 
  MoreHorizontal,
  Bell,
  Lock,
  ChevronLeft,
  ChevronRight,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function TopNavbar() {
  const teamMembers = [
    { id: 1, name: "John", avatar: "J" },
    { id: 2, name: "Sarah", avatar: "S" },
    { id: 3, name: "Mike", avatar: "M" },
    { id: 4, name: "Lisa", avatar: "L" },
    { id: 5, name: "Tom", avatar: "T" },
  ];

  return (
    <div className="h-16 bg-navbar-bg border-b border-navbar-border px-6 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <span className="text-xs text-primary-foreground font-medium">T</span>
          </div>
          <h1 className="text-lg font-semibold text-foreground">Team Project</h1>
          
          {/* Team members */}
          <div className="flex -space-x-2 ml-2">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-task-purple border-2 border-background flex items-center justify-center text-xs text-white font-medium"
              >
                {member.avatar}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
              <span className="text-xs text-muted-foreground font-medium">9+</span>
            </div>
          </div>
          
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground">
          <span>Website</span>
          <span className="mx-2">/</span>
          <span>Apps</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">Dribbble Shot</span>
        </div>
      </div>

      {/* Center Section - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text"
            placeholder="Type to search"
            className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg text-sm placeholder-muted-foreground border-0 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 relative">
          <Bell className="w-4 h-4" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></div>
        </Button>
        
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <Lock className="w-4 h-4" />
        </Button>

        {/* Share and Link buttons */}
        <Button size="sm" variant="secondary">
          Share
        </Button>
        
        <Button size="sm" variant="secondary" className="gap-2">
          Link
          <ChevronDown className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
}

export function ViewToolbar() {
  return (
    <div className="h-12 bg-navbar-bg border-b border-navbar-border px-6 flex items-center justify-between">
      {/* Left - View Controls */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-8 px-3 text-primary bg-primary/10 hover:bg-primary/20"
          >
            Card
          </Button>
          <Button size="sm" variant="ghost" className="h-8 px-3">
            Blocks
          </Button>
          <Button size="sm" variant="ghost" className="h-8 px-3">
            Table
          </Button>
        </div>
        
        <Button size="sm" variant="secondary" className="gap-2">
          1 Weeks
          <ChevronDown className="w-3 h-3" />
        </Button>
      </div>

      {/* Right - Date Navigation */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <Settings className="w-4 h-4" />
          </Button>
          <span>30 minutes ago</span>
          <div className="w-6 h-6 rounded-full bg-task-green flex items-center justify-center">
            <span className="text-xs text-white font-medium">S</span>
          </div>
          <span className="text-foreground">Sarah</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-lg font-semibold text-foreground">June, 2023</span>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}