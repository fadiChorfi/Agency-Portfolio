import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart, BookOpen, Briefcase } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-2 lg:py-2 xl:py-2">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Marketing, Training, and Business Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We help businesses grow through strategic marketing, professional training, and innovative business
                  solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Comprehensive solutions to help your business thrive in today's competitive market.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-background">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <BarChart className="h-12 w-12 text-primary" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Marketing & Advertising</h3>
                  <p className="text-muted-foreground">
                    Strategic marketing campaigns that drive growth and increase brand visibility.
                  </p>
                </div>
                <Button variant="link" asChild className="mt-auto">
                  <Link href="/services#marketing" className="flex items-center gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <BookOpen className="h-12 w-12 text-primary" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Training & Workshops</h3>
                  <p className="text-muted-foreground">
                    Professional training programs designed to enhance skills and productivity.
                  </p>
                </div>
                <Button variant="link" asChild className="mt-auto">
                  <Link href="/services#training" className="flex items-center gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <Briefcase className="h-12 w-12 text-primary" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Business Solutions</h3>
                  <p className="text-muted-foreground">
                    Tailored business strategies and solutions to overcome challenges and achieve goals.
                  </p>
                </div>
                <Button variant="link" asChild className="mt-auto">
                  <Link href="/services#solutions" className="flex items-center gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Client Testimonials</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Don't just take our word for it. Here's what our clients have to say.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <p className="italic">"{testimonial.quote}"</p>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-muted">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Grow Your Business?</h2>
              <p className="max-w-[900px] md:text-xl">
                Let's work together to achieve your business goals. Contact us today for a free consultation.
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

const testimonials = [
  {
    quote:
      "Working with MarketPro Solutions transformed our marketing strategy. Our online presence has grown by 200% in just six months.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    quote:
      "The training workshops provided by MarketPro were exactly what our team needed. Highly professional and effective.",
    name: "Michael Chen",
    title: "HR Director, Global Innovations",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    quote:
      "Their business solutions helped us navigate a challenging market transition. Couldn't recommend them more highly.",
    name: "Emma Rodriguez",
    title: "Operations Manager, Bright Future Ltd",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

