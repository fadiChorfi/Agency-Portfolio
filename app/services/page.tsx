import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, BookOpen, Briefcase, CheckCircle, Code2, Film, Palette, Search } from "lucide-react"




const marketingServices = [
  "Digital Marketing Campaigns",
  "Social Media Management",
  "Content Creation & Strategy",
  "SEO & SEM Optimization",
  "Brand Development",
  "Email Marketing",
  "Market Research & Analysis",
  "Advertising Strategy",
]

const trainingServices = [
  "Marketing Skills Workshops",
  "Leadership Development",
  "Sales Training",
  "Digital Skills Training",
  "Customer Service Excellence",
  "Team Building Programs",
  "Communication Skills",
  "Strategic Planning Workshops",
]

const businessSolutions = [
  "Business Strategy Development",
  "Process Optimization",
  "Growth Planning",
  "Market Entry Strategies",
  "Competitive Analysis",
  "Customer Experience Design",
  "Business Model Innovation",
  "Performance Metrics & KPIs",
]

const plans = [
  {
    name: "Starter Plan",
    description: "Perfect for small businesses looking to establish their presence.",
    features: [
      "Basic marketing strategy",
      "Social media setup",
      "One training workshop",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Growth Plan",
    description: "Ideal for businesses ready to expand their market reach.",
    features: [
      "Comprehensive marketing strategy",
      "Social media management",
      "Content creation",
      "Quarterly training workshops",
      "Business growth consulting",
      "Weekly performance reports",
      "Priority email & phone support",
    ],
  },
  {
    name: "Enterprise Plan",
    description: "For established businesses seeking to dominate their market.",
    features: [
      "Advanced marketing strategy",
      "Full digital marketing suite",
      "Custom training programs",
      "Business transformation consulting",
      "Dedicated account manager",
      "Real-time performance dashboard",
      "24/7 priority support",
    ],
  },
]

const serviceSections = [
  {
    id: "marketing",
    title: "Strategic Marketing Solutions",
    icon: <BarChart className="mr-1 h-4 w-4" />,
    category: "Marketing & Advertising",
    description: "Data-driven campaigns that amplify your brand's reach and drive measurable ROI through targeted strategies.",
    services: [
      "Digital Marketing Campaigns",
      "Social Media Management",
      "Content Strategy",
      "SEO/SEM Optimization",
      "Email Marketing",
      "Influencer Partnerships",
      "Advertising Strategy",
      "Performance Analytics"
    ],
    bgColor: "",
    imageOrder: "last"
  },
  {
    id: "design",
    title: "Visual Branding Excellence",
    icon: <Palette className="mr-1 h-4 w-4" />,
    category: "Graphic Design",
    description: "Stunning visual identities that communicate your brand story and captivate your audience across all touchpoints.",
    services: [
      "Logo & Brand Identity",
      "Print Design",
      "Digital Graphics",
      "Packaging Design",
      "UI/UX Design",
      "Marketing Collateral",
      "Infographics",
      "Brand Guidelines"
    ],
    bgColor: "bg-muted",
    imageOrder: "first"
  },
  {
    id: "development",
    title: "Digital Product Development",
    icon: <Code2 className="mr-1 h-4 w-4" />,
    category: "Web & App Development",
    description: "Custom digital solutions engineered for performance, scalability, and seamless user experiences.",
    services: [
      "Website Development",
      "Mobile Applications",
      "E-commerce Solutions",
      "CMS Implementation",
      "API Integration",
      "Database Architecture",
      "Progressive Web Apps",
      "Maintenance & Support"
    ],
    bgColor: "",
    imageOrder: "last"
  },
  {
    id: "video",
    title: "Captivating Video Content",
    icon: <Film className="mr-1 h-4 w-4" />,
    category: "Video Production",
    description: "High-impact video content that tells your brand story and drives engagement across platforms.",
    services: [
      "Commercial Videos",
      "Social Media Content",
      "Animation/Motion Graphics",
      "Product Demos",
      "Testimonial Videos",
      "Event Coverage",
      "Video Editing",
      "Post-Production"
    ],
    bgColor: "bg-muted",
    imageOrder: "first"
  },
  {
    id: "research",
    title: "Data-Driven Market Insights",
    icon: <Search className="mr-1 h-4 w-4" />,
    category: "Market Research",
    description: "Actionable intelligence and competitive analysis to inform your strategic business decisions.",
    services: [
      "Consumer Behavior Analysis",
      "Competitive Benchmarking",
      "Market Trend Reports",
      "Brand Perception Studies",
      "Product Testing",
      "Pricing Analysis",
      "Customer Segmentation",
      "ROI Forecasting"
    ],
    bgColor: "",
    imageOrder: "last"
  },
  {
    id: "courses",
    title: "Professional Skill Development",
    icon: <BookOpen className="mr-1 h-4 w-4" />,
    category: "Courses & Workshops",
    description: "Hands-on training programs to elevate your team's capabilities in marketing, design, and technology.",
    services: [
      "Digital Marketing Masterclass",
      "Design Thinking Workshops",
      "Coding Bootcamps",
      "Video Production Training",
      "Data Analytics Courses",
      "Leadership Development",
      "Brand Strategy Sessions",
      "AI Tools for Business"
    ],
    bgColor: "bg-muted",
    imageOrder: "first"
  }
];


export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Comprehensive marketing, training, and business solutions tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Service Sections */}
      {serviceSections.map((section) => (
        <section 
          key={section.id} 
          id={section.id} 
          className={`w-full py-12 md:py-24 lg:py-32 ${section.bgColor}`}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className={`flex flex-col justify-center space-y-4 ${section.imageOrder === 'first' ? 'order-last lg:order-first' : ''}`}>
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  {section.icon}
                  {section.category}
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{section.title}</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {section.description}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Our {section.category} Include:</h3>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {section.services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt={`${section.category} services`}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Plans */}
    {/*   <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Pricing Plans</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Choose the plan that fits your business needs and budget.
              </p>
            </div>
          </div>
          <div className="grid gap-6 pt-12 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Business?</h2>
              <p className="max-w-[900px] md:text-xl">
                Contact us today to discuss how our services can help you achieve your business goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

