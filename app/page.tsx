import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart,
  Palette,
  Code2,
  CheckCircle,
  Zap,
  Clock,
  Film,
  Search,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { caseStudies } from "@/data/data";

/* const testimonials = [
  {
    quote:
      "Working with this team transformed our marketing strategy. Our online presence has grown by 200% in just six months.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    avatar: "/testimonials/sarah.jpg",
  },
  {
    quote:
      "The training workshops provided were exactly what our team needed. Highly professional and effective.",
    name: "Michael Chen",
    title: "HR Director, Global Innovations",
    avatar: "/testimonials/michael.jpg",
  },
  {
    quote:
      "Their business solutions helped us navigate a challenging market transition. Couldn't recommend them more highly.",
    name: "Emma Rodriguez",
    title: "Operations Manager, Bright Future Ltd",
    avatar: "/testimonials/emma.jpg",
  },
]; */

const services = [
  {
    icon: <BarChart className="h-12 w-12 text-primary" />,
    title: "Marketing & Advertising",
    description:
      "Data-driven campaigns and targeted strategies to amplify your brand’s reach and ROI.",
    link: "/services/#marketing",
  },
  {
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: "Branding & Graphic Design",
    description:
      "Visually stunning identities and designs that tell your story and resonate with audiences.",
    link: "/services/#design",
  },
  {
    icon: <Code2 className="h-12 w-12 text-primary" />,
    title: "Development",
    description:
      "Custom apps and digital solutions engineered for performance, engagement, and scalability.",
    link: "/services/#development",
  },
  {
    icon: <Film className="h-12 w-12 text-primary" />,
    title: "Video Editing & Production",
    description:
      "Captivating video content that boosts engagement, from ads to social media storytelling.",
    link: "/services/#video",
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "Market Research & Analysis",
    description:
      "Actionable insights and competitive intelligence to guide your business decisions.",
    link: "/services/#research",
  },
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: "Courses & Workshops",
    description:
      "Hands-on training in marketing, design, and tech—empowering teams with cutting-edge skills.",
    link: "/services/#courses",
  },
];

const featureCards = [
  {
    id: 1,
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Proven Expertise",
    description:
      "With over 10 years of industry experience, our team of experts has successfully delivered hundreds of projects across various sectors.",
  },
  {
    id: 2,
    icon: <Zap className="h-8 w-8" />,
    title: "Innovative Solutions",
    description:
      "We leverage the latest technologies and methodologies to create cutting-edge solutions that solve complex business challenges.",
  },
  {
    id: 3,
    icon: <Clock className="h-8 w-8" />,
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines and pride ourselves on delivering high-quality solutions on time and within budget.",
  },
];

const stats = [
  { id: 1, value: "500+", label: "Satisfied Clients" },
  { id: 2, value: "98%", label: "Success Rate" },
  { id: 3, value: "5+", label: "Years of Experience" },
  { id: 4, value: "24/7", label: "Customer Support" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-2 lg:py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-56 items-center">
            <div className="flex flex-col justify-between md:py-14 animate-fade-in  min-h-full ">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  Marketing, Branding, and Development Solutions
                </h1>

                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl max-w-xl">
                  In a crowded market, we help you reach your business goals
                  from marketing to development. We've served 500+ clients
                  around Algeria and the world. Join us to level up!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">Book A Call</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center animate-float">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl "></div>
                <Image
                  src="/logo.png"
                  width={500}
                  height={500}
                  alt="Agency Logo"
                  className="rounded-xl relative z-10 object-cover "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Added consistent styling */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-2">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Our Advantages
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                  Why Choose Us
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We combine industry expertise, cutting-edge technology, and a
                  customer-first approach to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featureCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="text-primary mb-6 bg-primary/10 p-3 rounded-full inline-flex">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl px-8 py-12 shadow-sm flex flex-wrap justify-around text-center mb-16">
            {stats.map((stat) => (
              <div key={stat.id} className="px-4 py-4 flex-1 min-w-[150px]">
                <div className="text-5xl font-bold mb-2 text-primary">
                  {stat.value}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-16 md:py-24 lg:py-32 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                Our Services
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Comprehensive solutions to help your business thrive in today's
                competitive market.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <Card
                className="bg-muted hover:shadow-lg transition-all duration-300 border-transparent hover:border-primary/20"
                key={index}
              >
                <CardContent className="flex flex-col items-center space-y-4 p-6 pt-8">
                  <div className="rounded-full bg-primary/10 p-3 mb-2">
                    {item.icon}
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <Button variant="link" asChild className="mt-auto">
                    <Link
                      href={item.link}
                      className="flex items-center gap-1 hover:gap-2 transition-all duration-300"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Added consistent styling */}
      {/* <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-2">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Our Advantages
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                  Why Choose Us
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We combine industry expertise, cutting-edge technology, and a
                  customer-first approach to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featureCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="text-primary mb-6 bg-primary/10 p-3 rounded-full inline-flex">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl px-8 py-12 shadow-sm flex flex-wrap justify-around text-center mb-16">
            {stats.map((stat) => (
              <div key={stat.id} className="px-4 py-4 flex-1 min-w-[150px]">
                <div className="text-5xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Portfolio Section - Added hover effects and consistent styling */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Portfolio
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                Our Portfolio
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Explore our success stories and see how we've helped businesses
                achieve their goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3 rounded-lg overflow-hidden">
            {caseStudies.slice(0, 3).map((study, index) => (
              <Card
                className="  hover:shadow-lg overflow-hidden transition-all duration-300 border-transparent hover:border-primary/20 group"
                key={index}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={500}
                    className="aspect-auto object-cover w-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded mb-2">
                        {study.category}
                      </div>
                      <h3 className="text-xl font-bold">{study.title}</h3>
                      <p className="text-muted-foreground">
                        {study.description}
                      </p>
                    </div> 
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Added missing rendering of testimonials data */}
     {/*  <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Testimonials
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Don't just take our word for it - hear what our clients have to
                say about working with us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardContent className="pt-6 px-2">
                  <div className="mb-6">
                    <svg width="45" height="36" className="text-primary/30">
                      <path
                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="mb-6 italic text-gray-700">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section - Improved with gradient */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-slate-300 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Grow Your Business?
              </h2>
              <p className="md:text-xl">
                Let's work together to achieve your business goals. Contact us
                today for a free consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                asChild
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Improved styling */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              FAQ
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Find answers to common questions about our services and process.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-border">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What services do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We offer a comprehensive range of services including marketing
                  & advertising, branding & design, and web & mobile
                  development. Each service is tailored to meet your specific
                  business needs and goals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-border">
                <AccordionTrigger className="text-lg font-medium py-4">
                  How do you charge for your services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Our pricing structure varies depending on the scope and
                  requirements of your project. We offer both project-based
                  pricing and retainer options. Contact us for a customized
                  quote based on your specific needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-border">
                <AccordionTrigger className="text-lg font-medium py-4">
                  How long does a typical project take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Project timelines vary based on complexity and scope. A simple
                  website might take 3-4 weeks, while comprehensive marketing
                  campaigns or custom applications may take several months.
                  We'll provide a detailed timeline during our initial
                  consultation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-border">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Do you work with international clients?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! We have experience working with clients from around the
                  world. Our team is equipped to handle projects across
                  different time zones and cultural contexts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What industries do you specialize in?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We've worked across numerous industries including technology,
                  healthcare, retail, finance, education, and more. Our diverse
                  experience allows us to bring fresh perspectives while
                  understanding the unique challenges of your industry.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          
        </div>
      </section>
    </div>
  );
}