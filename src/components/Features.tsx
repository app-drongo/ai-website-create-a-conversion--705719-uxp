// Features Component
// Generated: 2025-08-28T13:11:45.599Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Wifi, 
  Shield, 
  Coffee, 
  Users, 
  Calendar, 
  Printer,
  Car,
  Headphones,
  Clock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Wifi,
      title: "Ultra-Fast Internet",
      description: "Dedicated fiber optic connection with 1GB speeds and backup networks for uninterrupted productivity.",
      badge: "Connectivity"
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "24/7 keycard access with advanced security systems and monitored entry points.",
      badge: "Security"
    },
    {
      icon: Coffee,
      title: "Premium Amenities",
      description: "Complimentary coffee bar, kitchen facilities, and comfortable lounge areas for breaks.",
      badge: "Comfort"
    },
    {
      icon: Users,
      title: "Networking Hub",
      description: "Connect with like-minded entrepreneurs and professionals in our vibrant community.",
      badge: "Community"
    },
    {
      icon: Calendar,
      title: "Meeting Rooms",
      description: "Professional conference rooms with AV equipment, whiteboards, and video conferencing.",
      badge: "Facilities"
    },
    {
      icon: Printer,
      title: "Business Services",
      description: "High-quality printing, scanning, and office supplies available on-demand.",
      badge: "Services"
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Complimentary parking spaces for all members with convenient building access.",
      badge: "Convenience"
    },
    {
      icon: Headphones,
      title: "Quiet Zones",
      description: "Dedicated silent work areas and phone booths for focused work and private calls.",
      badge: "Productivity"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Access your workspace anytime with 24/7 availability that fits your schedule.",
      badge: "Flexibility"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Workspace Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Work Your Best
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FlexWork Spaces provides all the amenities and services you need to focus on growing 
            your business in a professional, collaborative environment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to experience the FlexWork difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule a Visit
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View Membership Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}