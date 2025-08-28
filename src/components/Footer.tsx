// Footer Component
// Generated: 2025-08-28T13:11:45.599Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Building2
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Workspace Solutions",
      links: [
        { name: "Coworking Spaces", href: "#features" },
        { name: "Private Offices", href: "#features" },
        { name: "Meeting Rooms", href: "#features" },
        { name: "Virtual Offices", href: "#features" },
        { name: "Event Spaces", href: "#features" },
        { name: "Pricing Plans", href: "#pricing" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About FlexWork", href: "#about" },
        { name: "Our Locations", href: "/locations" },
        { name: "Success Stories", href: "/case-studies" },
        { name: "Careers", href: "/careers" },
        { name: "Press & Media", href: "/press" },
        { name: "Contact Us", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Member Portal", href: "/portal" },
        { name: "Community Events", href: "/events" },
        { name: "Business Resources", href: "/resources" },
        { name: "Workspace Guide", href: "/guide" },
        { name: "Remote Work Tips", href: "/blog" },
        { name: "Support Center", href: "/support" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Membership Agreement", href: "/agreement" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Data Security", href: "/security" },
        { name: "Accessibility", href: "/accessibility" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/flexworkspaces" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/flexworkspaces" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/flexworkspaces" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/flexworkspaces" }
  ]

  return (
    <footer className="bg-background border-t border-muted">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Building2 className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl text-foreground">FlexWork Spaces</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transforming the way businesses work with flexible, modern workspace solutions. 
                Join hundreds of companies who've revolutionized their work environment with our consulting expertise.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@flexworkspaces.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) FLEX-WORK</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Downtown Business District, Multiple Locations</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground">Workspace Insights</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-muted rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get workspace trends and business insights. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 FlexWork Spaces. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-accent fill-current" /> for modern businesses
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-muted/30">
            <Link href="/sitemap" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
            <Link href="/partnership" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Partnership Program
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}