import { 
  ExternalLink, 
  TrendingUp,
  ChevronDown,
  MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProjectInsights() {
  const teamMembers = [
    { id: 1, name: "John", avatar: "J", color: "bg-task-blue" },
    { id: 2, name: "Sarah", avatar: "S", color: "bg-task-green" },
    { id: 3, name: "Mike", avatar: "M", color: "bg-task-yellow" },
    { id: 4, name: "Lisa", avatar: "L", color: "bg-task-pink" },
    { id: 5, name: "Tom", avatar: "T", color: "bg-task-purple" },
  ];

  const chartData = [
    { day: 'S', value: 30, color: 'bg-task-green' },
    { day: 'M', value: 80, color: 'bg-task-blue' },
    { day: 'T', value: 60, color: 'bg-task-purple' },
    { day: 'W', value: 90, color: 'bg-task-pink' },
    { day: 'T', value: 45, color: 'bg-task-yellow' },
    { day: 'F', value: 75, color: 'bg-task-green' },
    { day: 'S', value: 20, color: 'bg-task-blue' },
  ];

  return (
    <div className="w-80 bg-card border-l border-border p-6 space-y-6">
      {/* Last Projects */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Last Projects</h3>
          <span className="text-sm text-muted-foreground">2</span>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-task-purple flex items-center justify-center">
              <span className="text-sm text-white font-medium">SH</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground text-sm">Smart Home UI Ux</h4>
              <p className="text-xs text-muted-foreground">5 Member</p>
            </div>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <MoreHorizontal className="w-3 h-3" />
            </Button>
          </div>
          
          {/* Project visualization */}
          <div className="p-4 rounded-lg bg-secondary/30">
            <div className="space-y-2">
              {/* Colorful project flow diagram */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-task-yellow rounded-full"></div>
                <div className="flex-1 h-px bg-border"></div>
                <div className="w-3 h-3 bg-task-pink rounded-full"></div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <div className="w-3 h-3 bg-task-blue rounded-full"></div>
                <div className="flex-1 h-px bg-border"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-task-green rounded-full"></div>
                <div className="flex-1 h-px bg-border"></div>
                <div className="w-3 h-3 bg-task-purple rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full mt-3 text-primary hover:text-primary/80 gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          View on Figma
        </Button>
      </div>

      {/* Team Insights */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground">Team Insights</h3>
            <TrendingUp className="w-4 h-4 text-task-green" />
            <span className="text-sm text-task-green">+8624</span>
          </div>
          <Button size="sm" variant="ghost" className="text-primary gap-1">
            View all
          </Button>
        </div>

        {/* Team members */}
        <div className="flex -space-x-2 mb-4">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className={`w-8 h-8 rounded-full ${member.color} border-2 border-background flex items-center justify-center text-xs text-white font-medium`}
            >
              {member.avatar}
            </div>
          ))}
          <Button size="sm" variant="ghost" className="w-8 h-8 p-0 rounded-full border-2 border-background ml-2">
            <MoreHorizontal className="w-3 h-3" />
          </Button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-muted-foreground">Time Spent</span>
              <Button size="sm" variant="ghost" className="h-5 px-2 text-xs gap-1">
                Days
                <ChevronDown className="w-3 h-3" />
              </Button>
            </div>
            <div className="text-2xl font-bold text-foreground">9h</div>
            <div className="text-xs text-muted-foreground">-18%</div>
            <div className="text-xs text-task-green">Today</div>
          </div>
          
          <div>
            <span className="text-sm text-muted-foreground">Tasks</span>
            <div className="text-2xl font-bold text-foreground">10</div>
            <div className="text-xs text-muted-foreground">-8%</div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-task-green rounded-full"></div>
            <span className="text-sm text-muted-foreground">Doing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-task-yellow rounded-full"></div>
            <span className="text-sm text-muted-foreground">Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-task-blue rounded-full"></div>
            <span className="text-sm text-muted-foreground">Completed</span>
            <span className="text-sm text-foreground ml-auto">2</span>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-4">
          <div className="flex items-end justify-between h-24 gap-1">
            {chartData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-1 flex-1">
                <div 
                  className={`w-full ${item.color} rounded-sm opacity-80`}
                  style={{ height: `${item.value}%` }}
                ></div>
                <span className="text-xs text-muted-foreground">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}