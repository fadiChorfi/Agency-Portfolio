import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart, BookOpen, Briefcase, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* header */}
      <section className="w-full py-12 md:py-2 lg:py-2 xl:py-2">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center gap-12   space-y-2">
              <div className="space-y-4  gap-12  ">
                <h1 className=" text-2xl font-bold tracking-tighter md:leading-[30rem] sm:text-5xl xl:text-5xl/none">
                  Marketing, Branding, and Development Solutions
                </h1>

                <p className="max-w-[600px] leading-8 text-muted-foreground md:text-xl">
                  In a crowded market, we help you reach your business goals
                  from marketing to development. We served xx+ clients arround
                  Algeria and the world. Join us to level up!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Book A Call</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png"
                width={500}
                height={500}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Comprehensive solutions to help your business thrive in today's
                competitive market.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <Card className="bg-background" key={index}>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  {item.icon}
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <Button variant="link" asChild className="mt-auto">
                    <Link href={item.link} className="flex items-center gap-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* why us */}

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground">
            We combine industry expertise, cutting-edge technology, and a
            customer-first approach to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl p-8   duration-300"
            >
              <div className=" w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted rounded-xl px-8 py-12  flex flex-wrap justify-around text-center mb-16">
          {stats.map((stat) => (
            <div key={stat.id} className="px-4 py-4 flex-1 min-w-max">
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* top3sercices */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Portfolio
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Explore our success stories and see how we've helped businesses
                achieve their goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card className="overflow-hidden" key={index}>
                <div className="relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={225}
                    className="aspect-video object-cover w-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{study.title}</h3>
                      <p className="text-muted-foreground">
                        {study.description}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Client:</span>
                        <span className="font-medium">{study.client}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Industry:</span>
                        <span className="font-medium">{study.industry}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Results:</span>
                        <span className="font-medium text-green-600">
                          {study.results}
                        </span>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link
                        href={`/portfolio/${study.id}`}
                        className="flex items-center"
                      >
                        Read case study <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Grow Your Business?
              </h2>
              <p className="max-w-[900px] md:text-xl">
                Let's work together to achieve your business goals. Contact us
                today for a free consultation.
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

      {/* Faq */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                FAQ
              </h2>
            </div>

            <div className="min-w-[60%]">
              <Accordion type="single" collapsible className="min-w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const caseStudies = [
  {
    id: "tech-startup-growth",
    title: "Tech Startup Growth Strategy",
    description:
      "Helping a tech startup increase their market presence and user acquisition.",
    client: "InnovateTech",
    industry: "Technology",
    results: "+200% Growth",
    category: "marketing",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "retail-chain-training",
    title: "Retail Staff Training Program",
    description:
      "Developing a comprehensive training program for a national retail chain.",
    client: "RetailPlus",
    industry: "Retail",
    results: "+45% Efficiency",
    category: "training",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "healthcare-business-transformation",
    title: "Healthcare Business Transformation",
    description:
      "Guiding a healthcare provider through digital transformation.",
    client: "MediCare Solutions",
    industry: "Healthcare",
    results: "30% Cost Reduction",
    category: "business",
    image: "/placeholder.svg?height=225&width=400",
  },
];

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
];

interface Service {
  icon: any;
  title: string;
  description: string;
  link: any;
}

const services: Service[] = [
  {
    icon: <BarChart className="h-12 w-12 text-primary" />,
    title: "Marketing & Advertising",
    description:
      "Strategic marketing campaigns that drive growth and increase brand visibility.",
    link: "/services#marketing",
  },
  {
    icon: <BarChart className="h-12 w-12 text-primary" />,
    title: "Branding & Design",
    description:
      "Strategic marketing campaigns that drive growth and increase brand visibility.",
    link: "/services#design",
  },
  {
    icon: <Code2 className="h-12 w-12 text-primary" />,
    title: "Development",
    description:
      "We craft apps that don't just run — they connect, captivate, and convert.",
    link: "/services#development",
  },
];

const featureCards = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Proven Expertise",
    description:
      "With over 10 years of industry experience, our team of experts has successfully delivered hundreds of projects across various sectors.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Innovative Solutions",
    description:
      "We leverage the latest technologies and methodologies to create cutting-edge solutions that solve complex business challenges.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines and pride ourselves on delivering high-quality solutions on time and within budget.",
  },
];

const stats = [
  { id: 1, value: "500+", label: "Satisfied Clients" },
  { id: 2, value: "98%", label: "Success Rate" },
  { id: 3, value: "10+", label: "Years of Experience" },
  { id: 4, value: "24/7", label: "Customer Support" },
];
