export const industryData = [
  {
    industry: "Automotive Repair Shops",
    oneStarPercentage: 34,
    averageRating: 3.1,
    totalBusinesses: 162000,
    commonComplaints: ["Overpricing", "Hidden fees", "Poor communication", "Long wait times"],
    opportunity: 'critical' as const
  },
  {
    industry: "Home Contractors",
    oneStarPercentage: 31,
    averageRating: 3.2,
    totalBusinesses: 729000,
    commonComplaints: ["No-shows", "Poor workmanship", "Cost overruns", "Delays"],
    opportunity: 'critical' as const
  },
  {
    industry: "Cable/Internet Providers",
    oneStarPercentage: 29,
    averageRating: 3.0,
    totalBusinesses: 2800,
    commonComplaints: ["Service outages", "Poor tech support", "Billing issues", "Hidden fees"],
    opportunity: 'critical' as const
  },
  {
    industry: "Moving Companies",
    oneStarPercentage: 28,
    averageRating: 3.3,
    totalBusinesses: 18500,
    commonComplaints: ["Damaged items", "Late delivery", "Hidden costs", "Unprofessional staff"],
    opportunity: 'high' as const
  },
  {
    industry: "Towing Services",
    oneStarPercentage: 27,
    averageRating: 3.1,
    totalBusinesses: 9200,
    commonComplaints: ["Overcharging", "Long wait times", "Rough handling", "Poor availability"],
    opportunity: 'high' as const
  }
];

export const solutionData = [
  {
    title: "Review Response Automation",
    description: "AI-powered system that automatically responds to negative reviews with personalized, professional responses within minutes.",
    features: [
      "24/7 automated response to all reviews",
      "Sentiment analysis and custom messaging",
      "Escalation alerts for critical issues",
      "Multi-platform integration (Google, Yelp, Facebook)"
    ],
    pricing: "$297/month",
    roi: "400%+",
    targetIndustries: ["Auto Repair", "Contractors", "Moving"],
    difficulty: 'easy' as const
  },
  {
    title: "Customer Experience Recovery",
    description: "Complete system for identifying unhappy customers before they leave reviews and turning them into promoters.",
    features: [
      "SMS/Email follow-up automation",
      "Issue resolution workflow",
      "Staff training modules",
      "Customer satisfaction tracking"
    ],
    pricing: "$497/month",
    roi: "600%+",
    targetIndustries: ["All Service Industries"],
    difficulty: 'medium' as const
  },
  {
    title: "Reputation Monitoring Dashboard",
    description: "Real-time monitoring across 100+ review platforms with instant alerts and competitive analysis.",
    features: [
      "Real-time review monitoring",
      "Competitor benchmarking",
      "Custom alert system",
      "Detailed analytics and reporting"
    ],
    pricing: "$197/month",
    roi: "300%+",
    targetIndustries: ["All Industries"],
    difficulty: 'easy' as const
  },
  {
    title: "Local SEO Recovery Program",
    description: "Comprehensive program to rebuild search rankings damaged by poor reviews through strategic SEO and reputation management.",
    features: [
      "Local SEO optimization",
      "Content marketing strategy", 
      "Review generation campaigns",
      "Google My Business optimization"
    ],
    pricing: "$797/month",
    roi: "800%+",
    targetIndustries: ["Contractors", "Auto Repair", "Local Services"],
    difficulty: 'advanced' as const
  }
];

export const emailTemplates = [
  {
    industry: "Automotive Repair Shops",
    subject: "How [Shop Name] Can Turn 1-Star Reviews Into 5-Star Success Stories",
    template: `Hi [Owner Name],

I noticed that [Shop Name] has received some challenging reviews recently, and I wanted to reach out because I've helped 47 other auto repair shops in [City] transform their online reputation.

Here's what caught my attention:
• [Specific review observation]
• Current Google rating impact on local visibility
• Potential monthly revenue loss: $[calculated amount]

One of my clients, [Similar Shop Name], was facing similar challenges with customer communication and hidden fee complaints. Within 90 days, we:
✓ Increased their average rating from 3.1 to 4.6 stars
✓ Reduced negative reviews by 78%
✓ Boosted monthly revenue by $23,000

The solution? Our automotive-specific reputation recovery system that:
1. Automatically catches unhappy customers before they review
2. Provides staff with scripts for better communication
3. Generates authentic positive reviews from satisfied customers

Would you be interested in a 15-minute conversation about how this could work for [Shop Name]? I have a case study specifically for shops your size that I think you'd find valuable.

Best regards,
[Your Name]

P.S. I'm offering a free reputation audit this month - I can show you exactly which review platforms are costing you the most business.`,
    personalizedTips: [
      "Research their recent reviews and mention specific complaints",
      "Calculate revenue loss based on local competition analysis",
      "Find similar shops as case studies from their area",
      "Identify their biggest complaint categories for targeted solutions"
    ]
  },
  {
    industry: "Home Contractors",
    subject: "Why [Company Name] Is Losing $[Amount]/Month to Bad Reviews (+ Fix)",
    template: `Hi [Contractor Name],

As a [trade] contractor in [City], you know how much one bad review can cost you. I've been analyzing contractor reviews in your market, and I found something concerning about [Company Name]'s online presence.

Current situation:
• [X]% of your recent reviews mention [common complaint]
• You're ranking #[position] in local searches (should be top 3)
• Estimated monthly revenue impact: $[amount]

But here's the good news - I just helped [Similar Company] in [Nearby City] go from 3.2 to 4.7 stars in 4 months. Their results:
→ 156% increase in qualified leads
→ $43k additional monthly revenue
→ Zero reviews about [main complaint] in 90 days

Our contractor-specific system addresses the three biggest reputation killers:
1. Communication gaps (88% of complaints start here)
2. Expectation management
3. Post-job follow-up

The system works so well that [Client Name] actually gets customers calling them instead of their competitors now.

I'd love to show you our "Contractor Reputation Blueprint" - it's specifically designed for [trade type] businesses like yours.

Free 20-minute assessment this week?

[Your Name]
[Phone]

P.S. Every day you wait is potential revenue walking to competitors with better reviews. Let's fix this fast.`,
    personalizedTips: [
      "Research their trade speciality (plumbing, electrical, etc.)",
      "Calculate market-specific revenue loss estimates", 
      "Find local competitors with better ratings",
      "Identify their most common complaint patterns"
    ]
  }
];