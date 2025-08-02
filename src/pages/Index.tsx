import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndustryCard } from "@/components/IndustryCard";
import { SolutionCard } from "@/components/SolutionCard";
import { EmailTemplate } from "@/components/EmailTemplate";
import { industryData, solutionData, emailTemplates } from "@/data/industryData";
import { ArrowRight, BarChart3, DollarSign, TrendingUp, Users, Star, Mail, Target, Zap } from "lucide-react";

const Index = () => {
  const totalOpportunity = industryData.reduce((sum, industry) => sum + industry.totalBusinesses, 0);
  const avgOneStarRate = Math.round(industryData.reduce((sum, industry) => sum + industry.oneStarPercentage, 0) / industryData.length);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              📊 Industry Intelligence Report 2024
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Industries Drowning in 
              <span className="text-reputation-critical"> 1-Star Reviews</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the business opportunities hidden in poor online reputations. 
              <span className="text-primary font-semibold"> Over {totalOpportunity.toLocaleString()} businesses</span> are losing customers daily due to bad reviews.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="glass-effect border-border/50">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">{avgOneStarRate}%</div>
                <p className="text-muted-foreground">Average 1-Star Rate</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-border/50">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">{(totalOpportunity / 1000).toFixed(0)}k+</div>
                <p className="text-muted-foreground">Businesses Affected</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-border/50">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">$2.3B</div>
                <p className="text-muted-foreground">Lost Revenue/Year</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
            View Industry Data <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="industries" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-secondary/20">
                <TabsTrigger value="industries" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Industries
                </TabsTrigger>
                <TabsTrigger value="solutions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Zap className="w-4 h-4 mr-2" />
                  Solutions
                </TabsTrigger>
                <TabsTrigger value="outreach" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  Outreach
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="industries" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">High-Opportunity Industries</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  These industries have the highest concentration of 1-star reviews, representing 
                  massive opportunities for reputation management services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {industryData.map((industry, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <IndustryCard {...industry} />
                  </div>
                ))}
              </div>

              <Card className="glass-effect border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Target className="w-5 h-5 text-primary" />
                    Why These Industries Struggle
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Common Patterns:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• High-stress, time-sensitive services</li>
                        <li>• Complex pricing structures</li>
                        <li>• Multiple touchpoints for failure</li>
                        <li>• Limited follow-up processes</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Market Opportunity:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Most businesses lack reputation management</li>
                        <li>• High customer lifetime value</li>
                        <li>• Local competition is vulnerable</li>
                        <li>• Immediate ROI from improvements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solutions" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Revenue-Generating Solutions</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Proven systems and services that help businesses overcome their reputation challenges 
                  while generating substantial monthly recurring revenue.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutionData.map((solution, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                    <SolutionCard {...solution} />
                  </div>
                ))}
              </div>

              <Card className="glass-effect border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Business Model Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-secondary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">$2,500</div>
                      <p className="text-sm text-muted-foreground">Average Monthly Value per Client</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">85%</div>
                      <p className="text-sm text-muted-foreground">Client Retention Rate</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">30 Days</div>
                      <p className="text-sm text-muted-foreground">Average Results Timeline</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="outreach" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Proven Cold Email Templates</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Industry-specific email templates that have generated over $2.3M in new business 
                  for reputation management consultants.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {emailTemplates.map((template, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 300}ms` }}>
                    <EmailTemplate {...template} />
                  </div>
                ))}
              </div>

              <Card className="glass-effect border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Star className="w-5 h-5 text-primary" />
                    Cold Email Success Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-reputation-excellent">23%</div>
                      <p className="text-sm text-muted-foreground">Open Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-reputation-excellent">8.5%</div>
                      <p className="text-sm text-muted-foreground">Response Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-reputation-excellent">3.2%</div>
                      <p className="text-sm text-muted-foreground">Conversion Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">$180k</div>
                      <p className="text-sm text-muted-foreground">Avg Contract Value</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Capitalize on This Opportunity?</h2>
          <p className="text-muted-foreground text-lg">
            Join 500+ consultants already generating $50k+ monthly helping businesses fix their online reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
              Download Complete Report
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg">
              Book Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;