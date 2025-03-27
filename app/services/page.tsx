import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, BookOpen, Briefcase, CheckCircle } from "lucide-react"

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

      {/* Marketing & Advertising */}
      <section id="marketing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                <BarChart className="mr-1 h-4 w-4" />
                Marketing & Advertising
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Strategic Marketing Solutions</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our marketing and advertising services are designed to increase your brand visibility, engage your
                  target audience, and drive conversions.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Marketing Services Include:</h3>
                <ul className="grid gap-2 md:grid-cols-2">
                  {marketingServices.map((service, index) => (
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
                alt="Marketing services"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training & Workshops */}
      <section id="training" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Training workshops"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center rounded-lg bg-background px-3 py-1 text-sm">
                <BookOpen className="mr-1 h-4 w-4" />
                Training & Workshops
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Training Programs</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our training workshops and programs are designed to enhance skills, boost productivity, and develop
                  your team's capabilities.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Training Services Include:</h3>
                <ul className="grid gap-2 md:grid-cols-2">
                  {trainingServices.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section id="solutions" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                <Briefcase className="mr-1 h-4 w-4" />
                Business Solutions
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tailored Business Strategies</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our business solutions help you overcome challenges, optimize operations, and achieve your business
                  goals.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Business Solutions Include:</h3>
                <ul className="grid gap-2 md:grid-cols-2">
                  {businessSolutions.map((solution, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <span>{solution}</span>
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
                alt="Business solutions"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customized Plans */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Customized Plans for Your Business</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                We understand that every business is unique. That's why we offer customized plans tailored to your
                specific needs and goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card key={index} className={index === 1 ? "border-primary" : ""}>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Features:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className={index === 1 ? "" : "mt-auto"}>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

