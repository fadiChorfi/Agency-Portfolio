import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Explore our success stories and see how we've helped businesses achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="training">Training</TabsTrigger>
                <TabsTrigger value="business">Business Solutions</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies.map((study, index) => (
                  <CaseStudyCard key={index} caseStudy={study} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="marketing" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies
                  .filter((study) => study.category === "marketing")
                  .map((study, index) => (
                    <CaseStudyCard key={index} caseStudy={study} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="training" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies
                  .filter((study) => study.category === "training")
                  .map((study, index) => (
                    <CaseStudyCard key={index} caseStudy={study} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="business" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies
                  .filter((study) => study.category === "business")
                  .map((study, index) => (
                    <CaseStudyCard key={index} caseStudy={study} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Before & After Results */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Before & After Results</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                See the tangible impact of our services through these before and after comparisons.
              </p>
            </div>
          </div>
          <div className="grid gap-12">
            {beforeAfterResults.map((result, index) => (
              <div key={index} className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{result.title}</h3>
                  <p className="text-muted-foreground">{result.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Before</span>
                      <span className="text-muted-foreground">{result.beforeMetric}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">After</span>
                      <span className="text-primary font-bold">{result.afterMetric}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Improvement</span>
                      <span className="text-green-600 font-bold">{result.improvement}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="overflow-hidden rounded-lg border">
                      <Image
                        src={result.beforeImage || "/placeholder.svg"}
                        alt={`Before - ${result.title}`}
                        width={300}
                        height={200}
                        className="aspect-video object-cover"
                      />
                    </div>
                    <p className="text-center text-sm font-medium">Before</p>
                  </div>
                  <div className="space-y-2">
                    <div className="overflow-hidden rounded-lg border border-primary">
                      <Image
                        src={result.afterImage || "/placeholder.svg"}
                        alt={`After - ${result.title}`}
                        width={300}
                        height={200}
                        className="aspect-video object-cover"
                      />
                    </div>
                    <p className="text-center text-sm font-medium">After</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to See Results?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Let's work together to achieve similar results for your business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CaseStudyCard({ caseStudy }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={caseStudy.image || "/placeholder.svg"}
          alt={caseStudy.title}
          width={400}
          height={225}
          className="aspect-video object-cover w-full"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
          {caseStudy.category === "marketing"
            ? "Marketing"
            : caseStudy.category === "training"
              ? "Training"
              : "Business Solutions"}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{caseStudy.title}</h3>
            <p className="text-muted-foreground">{caseStudy.description}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Client:</span>
              <span className="font-medium">{caseStudy.client}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Industry:</span>
              <span className="font-medium">{caseStudy.industry}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Results:</span>
              <span className="font-medium text-green-600">{caseStudy.results}</span>
            </div>
          </div>
          <Button variant="link" className="p-0 h-auto" asChild>
            <Link href={`/portfolio/${caseStudy.id}`} className="flex items-center">
              Read case study <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const caseStudies = [
  {
    id: "tech-startup-growth",
    title: "Tech Startup Growth Strategy",
    description: "Helping a tech startup increase their market presence and user acquisition.",
    client: "InnovateTech",
    industry: "Technology",
    results: "+200% Growth",
    category: "marketing",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "retail-chain-training",
    title: "Retail Staff Training Program",
    description: "Developing a comprehensive training program for a national retail chain.",
    client: "RetailPlus",
    industry: "Retail",
    results: "+45% Efficiency",
    category: "training",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "healthcare-business-transformation",
    title: "Healthcare Business Transformation",
    description: "Guiding a healthcare provider through digital transformation.",
    client: "MediCare Solutions",
    industry: "Healthcare",
    results: "30% Cost Reduction",
    category: "business",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "ecommerce-marketing-campaign",
    title: "E-commerce Marketing Campaign",
    description: "Creating a multi-channel marketing campaign for an e-commerce platform.",
    client: "ShopEasy",
    industry: "E-commerce",
    results: "+150% Sales",
    category: "marketing",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "corporate-leadership-training",
    title: "Corporate Leadership Training",
    description: "Developing leadership skills for a corporate management team.",
    client: "Global Enterprises",
    industry: "Finance",
    results: "90% Satisfaction",
    category: "training",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    id: "restaurant-chain-expansion",
    title: "Restaurant Chain Expansion",
    description: "Strategic planning for a restaurant chain's market expansion.",
    client: "Flavor Fusion",
    industry: "Food & Beverage",
    results: "5 New Locations",
    category: "business",
    image: "/placeholder.svg?height=225&width=400",
  },
]

const beforeAfterResults = [
  {
    title: "Social Media Marketing Campaign",
    description: "A comprehensive social media strategy that transformed brand engagement and follower growth.",
    beforeMetric: "2,500 followers",
    afterMetric: "15,000+ followers",
    improvement: "+500%",
    beforeImage: "/placeholder.svg?height=200&width=300",
    afterImage: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Website Conversion Optimization",
    description: "Redesigning the client's website and optimizing the user journey to increase conversions.",
    beforeMetric: "1.2% conversion rate",
    afterMetric: "4.8% conversion rate",
    improvement: "+300%",
    beforeImage: "/placeholder.svg?height=200&width=300",
    afterImage: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Employee Training Program",
    description: "Implementing a structured training program to enhance employee skills and productivity.",
    beforeMetric: "65% productivity rate",
    afterMetric: "92% productivity rate",
    improvement: "+42%",
    beforeImage: "/placeholder.svg?height=200&width=300",
    afterImage: "/placeholder.svg?height=200&width=300",
  },
]

