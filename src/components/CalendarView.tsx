import { useState } from "react";
import { 
  Plus, 
  MoreHorizontal, 
  Users, 
  Calendar,
  Image as ImageIcon,
  FileText,
  CheckCircle,
  Clock,
  Trash2,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TaskCard {
  id: string;
  title: string;
  time: string;
  type: 'meeting' | 'design' | 'development' | 'review';
  color: 'yellow' | 'blue' | 'pink' | 'green' | 'purple';
  participants?: string[];
  description?: string;
  progress?: number;
  image?: boolean;
}

const mockTasks: TaskCard[] = [
  {
    id: '1',
    title: 'Design System Team Meeting',
    time: '10:15 - 12:15',
    type: 'meeting',
    color: 'yellow',
    participants: ['John', 'Sarah', 'Mike'],
    description: 'meet.wc.page.link',
  },
  {
    id: '2',
    title: 'Wireframe SmartHome App',
    time: '11:00 - 13:00',
    type: 'design',
    color: 'blue',
    description: 'Project Brief',
    participants: ['Monica Rose'],
  },
  {
    id: '3',
    title: '3d Design Orange Cotton',
    time: '10:45 - 16:15',
    type: 'design',
    color: 'blue',
    image: true,
    participants: ['Team'],
  },
  {
    id: '4',
    title: 'Final Edit',
    time: '14:00 - 16:00',
    type: 'review',
    color: 'blue',
    description: 'Review session',
  },
  {
    id: '5',
    title: 'Redesign Edu Web',
    time: 'Complete 3/5',
    type: 'development',
    color: 'pink',
    progress: 60,
  },
];

const timeSlots = [
  '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'
];

const dateHeaders = [
  { date: '26', day: 'Mon' },
  { date: '27', day: 'Tue' },
  { date: '28', day: 'Wed' },
  { date: '29', day: 'Thu' },
];

export function CalendarView() {
  const [filters, setFilters] = useState({
    colors: ['pink', 'yellow', 'blue', 'purple', 'green'],
    showDeleted: false,
  });

  const getTaskColorClass = (color: string) => {
    const colorMap = {
      yellow: 'bg-task-yellow text-black',
      blue: 'bg-task-blue text-white',
      pink: 'bg-task-pink text-white',
      green: 'bg-task-green text-white',
      purple: 'bg-task-purple text-white',
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-secondary';
  };

  return (
    <div className="flex-1 bg-background p-6">
      {/* Calendar Header */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <div className=""></div>
        {dateHeaders.map((header, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-foreground">{header.date}</div>
            <div className="text-sm text-muted-foreground">/{header.day}</div>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {/* Time Column */}
        <div className="space-y-4">
          {timeSlots.map((time) => (
            <div key={time} className="h-24 flex items-start">
              <span className="text-sm text-muted-foreground font-medium">{time}</span>
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        {dateHeaders.map((header, dayIndex) => (
          <div key={dayIndex} className="space-y-4">
            {timeSlots.map((time, timeIndex) => (
              <div key={`${dayIndex}-${timeIndex}`} className="h-24 relative">
                {/* Render tasks based on time and day */}
                {dayIndex === 0 && timeIndex === 0 && (
                  <div className={cn(
                    "absolute inset-0 p-3 rounded-xl shadow-card cursor-pointer hover:shadow-lg transition-all",
                    getTaskColorClass('yellow')
                  )}>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-3 h-3" />
                      <span className="text-xs font-medium">Design System</span>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Team Meeting</h3>
                    <div className="flex -space-x-1 mb-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-white/20 border border-white/30"></div>
                      ))}
                    </div>
                    <p className="text-xs opacity-90">10:15 - 12:15</p>
                    <p className="text-xs opacity-75 mt-1">meet.wc.page.link</p>
                    <Button size="sm" variant="ghost" className="absolute top-2 right-2 h-6 w-6 p-0">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                  </div>
                )}
                
                {dayIndex === 1 && timeIndex === 0 && (
                  <div className={cn(
                    "absolute inset-0 p-3 rounded-xl shadow-card cursor-pointer hover:shadow-lg transition-all",
                    getTaskColorClass('blue')
                  )}>
                    <div className="relative h-16 bg-white/10 rounded-lg mb-2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-80"></div>
                      <div className="absolute bottom-1 left-1 text-xs font-medium">3d Design</div>
                    </div>
                    <h3 className="font-semibold text-sm">Orange Cotton</h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs">10:45 - 16:15</span>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <MoreHorizontal className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                )}

                {dayIndex === 0 && timeIndex === 1 && (
                  <div className={cn(
                    "absolute inset-0 p-3 rounded-xl shadow-card cursor-pointer hover:shadow-lg transition-all",
                    getTaskColorClass('blue')
                  )}>
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="w-3 h-3" />
                      <span className="text-xs font-medium">Wireframe</span>
                    </div>
                    <h3 className="font-semibold text-sm">SmartHome App</h3>
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-4 h-4 rounded-full bg-white/20"></div>
                      <span className="text-xs">Monica Rose</span>
                    </div>
                    <p className="text-xs opacity-90">Project Brief</p>
                    <Button size="sm" variant="ghost" className="absolute top-2 right-2 h-6 w-6 p-0">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                  </div>
                )}

                {dayIndex === 2 && timeIndex === 2 && (
                  <div className="border-2 border-dashed border-task-green/50 rounded-xl p-4 text-center hover:border-task-green transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-task-green rounded-full flex items-center justify-center mx-auto mb-2">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground">Add New Task</span>
                  </div>
                )}

                {dayIndex === 3 && timeIndex === 0 && (
                  <div className={cn(
                    "absolute inset-0 p-3 rounded-xl shadow-card cursor-pointer hover:shadow-lg transition-all",
                    getTaskColorClass('pink')
                  )}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">Redesign</span>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <MoreHorizontal className="w-3 h-3" />
                      </Button>
                    </div>
                    <h3 className="font-semibold text-sm mb-2">Edu Web</h3>
                    <div className="text-xs mb-2">Complete 3/5</div>
                    
                    {/* Progress sections */}
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Research</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Wireframe</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>UI Design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        <span className="opacity-75">Prototype</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        <span className="opacity-50">A/B Test</span>
                      </div>
                    </div>
                    
                    <div className="text-xs mt-2 opacity-75">Deadline: July, 08</div>
                  </div>
                )}

                {dayIndex === 1 && timeIndex === 4 && (
                  <div className={cn(
                    "absolute inset-0 p-3 rounded-xl shadow-card cursor-pointer hover:shadow-lg transition-all",
                    getTaskColorClass('blue')
                  )}>
                    <div className="flex items-center gap-2 mb-1">
                      <Eye className="w-3 h-3" />
                      <span className="text-xs font-medium">Final Edit</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-white/20"></div>
                      <span className="text-xs">Review session</span>
                    </div>
                    <Button size="sm" variant="ghost" className="absolute top-2 right-2 h-6 w-6 p-0">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Filters</span>
            <Badge variant="secondary">6</Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Color:</span>
            <div className="flex gap-2">
              {[
                { color: 'pink', class: 'bg-task-pink' },
                { color: 'yellow', class: 'bg-task-yellow' },
                { color: 'blue', class: 'bg-task-blue' },
                { color: 'purple', class: 'bg-task-purple' },
                { color: 'green', class: 'bg-task-green' },
              ].map((item) => (
                <button
                  key={item.color}
                  className={cn(
                    "w-6 h-6 rounded-full border-2 border-transparent hover:border-white/30 transition-colors",
                    item.class
                  )}
                />
              ))}
              <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button size="sm" variant="ghost" className="gap-2">
            <ImageIcon className="w-4 h-4" />
            Add Image
          </Button>
          
          <div className="flex items-center gap-2">
            <Trash2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Deleted</span>
            <Badge variant="secondary">4</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}