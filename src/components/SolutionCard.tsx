import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, DollarSign, Target, Zap } from "lucide-react";

interface SolutionProps {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  roi: string;
  targetIndustries: string[];
  difficulty: 'easy' | 'medium' | 'advanced';
}

export const SolutionCard = ({ 
  title, 
  description, 
  features, 
  pricing, 
  roi, 
  targetIndustries, 
  difficulty 
}: SolutionProps) => {
  const difficultyColors = {
    easy: 'bg-reputation-excellent',
    medium: 'bg-reputation-needs-work', 
    advanced: 'bg-reputation-poor'
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 glass-effect border-border/50 hover:border-accent/30">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
          <Badge variant="outline" className={`${difficultyColors[difficulty]} text-white border-none capitalize`}>
            {difficulty}
          </Badge>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center gap-2 text-foreground">
            <Zap className="w-4 h-4 text-primary" />
            Key Features
          </h4>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-reputation-excellent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-border/50">
          <div>
            <div className="flex items-center gap-1 text-primary font-semibold">
              <DollarSign className="w-4 h-4" />
              {pricing}
            </div>
            <p className="text-xs text-muted-foreground">Starting Price</p>
          </div>
          <div>
            <div className="flex items-center gap-1 font-semibold text-reputation-excellent">
              <Target className="w-4 h-4" />
              {roi}
            </div>
            <p className="text-xs text-muted-foreground">ROI Potential</p>
          </div>
        </div>
        
        <div>
          <h5 className="text-sm font-semibold mb-2 text-foreground">Best For:</h5>
          <div className="flex flex-wrap gap-1">
            {targetIndustries.map((industry, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-secondary/50">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
        
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};