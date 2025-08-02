import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, TrendingDown, Users } from "lucide-react";

interface IndustryCardProps {
  industry: string;
  oneStarPercentage: number;
  averageRating: number;
  totalBusinesses: number;
  commonComplaints: string[];
  opportunity: 'critical' | 'high' | 'medium' | 'low';
}

export const IndustryCard = ({ 
  industry, 
  oneStarPercentage, 
  averageRating, 
  totalBusinesses, 
  commonComplaints, 
  opportunity 
}: IndustryCardProps) => {
  const opportunityColors = {
    critical: 'bg-reputation-critical',
    high: 'bg-reputation-poor', 
    medium: 'bg-reputation-needs-work',
    low: 'bg-reputation-good'
  };

  const opportunityLabels = {
    critical: 'Critical Opportunity',
    high: 'High Opportunity',
    medium: 'Medium Opportunity', 
    low: 'Low Opportunity'
  };

  return (
    <Card className="group hover:scale-[1.02] transition-all duration-300 glass-effect border-border/50 hover:border-primary/30">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {industry}
          </CardTitle>
          <Badge variant="outline" className={`${opportunityColors[opportunity]} text-white border-none`}>
            {opportunityLabels[opportunity]}
          </Badge>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-reputation-critical">
              <TrendingDown className="w-5 h-5" />
              {oneStarPercentage}%
            </div>
            <p className="text-xs text-muted-foreground">1-Star Reviews</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-foreground">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              {averageRating}
            </div>
            <p className="text-xs text-muted-foreground">Avg Rating</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
              <Users className="w-5 h-5" />
              {totalBusinesses.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Businesses</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Reputation Health</span>
            <span className="text-sm text-muted-foreground">{100 - oneStarPercentage}%</span>
          </div>
          <Progress 
            value={100 - oneStarPercentage} 
            className="h-2"
          />
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-2 text-foreground">Common Complaints:</h4>
          <div className="flex flex-wrap gap-1">
            {commonComplaints.map((complaint, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-secondary/50 hover:bg-secondary">
                {complaint}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};