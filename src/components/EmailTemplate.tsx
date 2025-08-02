import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Mail, MessageSquare, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface EmailTemplateProps {
  industry: string;
  subject: string;
  template: string;
  personalizedTips: string[];
}

export const EmailTemplate = ({ industry, subject, template, personalizedTips }: EmailTemplateProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "The content has been copied to your clipboard.",
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast({
        title: "Copy failed",
        description: "Please try selecting and copying the text manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="glass-effect border-border/50">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Mail className="w-5 h-5 text-primary" />
            {industry} Cold Email Template
          </CardTitle>
          <Badge variant="outline" className="bg-primary text-primary-foreground border-none">
            Ready to Use
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-foreground">Subject Line:</h4>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => copyToClipboard(subject)}
              className="text-xs"
            >
              <Copy className="w-3 h-3 mr-1" />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="p-3 bg-secondary/20 rounded-lg border border-border/50">
            <p className="text-sm font-medium text-foreground">{subject}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-foreground">Email Template:</h4>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => copyToClipboard(template)}
              className="text-xs"
            >
              <Copy className="w-3 h-3 mr-1" />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="p-4 bg-secondary/10 rounded-lg border border-border/50">
            <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans">
              {template}
            </pre>
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center gap-2 text-foreground">
            <MessageSquare className="w-4 h-4 text-primary" />
            Personalization Tips:
          </h4>
          <div className="space-y-2">
            {personalizedTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2 p-2 bg-accent/10 rounded">
                <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};