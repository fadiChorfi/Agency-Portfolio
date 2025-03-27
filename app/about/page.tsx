import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-2 lg:py-2 xl:py-2 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl  font-bold tracking-normal sm:text-5xl">About MarketPro <br/> Solutions</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We're a team of marketing experts, trainers, and business strategists dedicated to helping businesses
                  grow and succeed.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={550}
                height={550}
                alt="Team at work"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                <Target className="mr-1 h-4 w-4" />
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Empowering Business Growth</h2>
              <p className="text-muted-foreground md:text-xl">
                Our mission is to empower businesses with the tools, knowledge, and strategies they need to thrive in
                today's competitive market. We believe in creating sustainable growth through innovative marketing,
                comprehensive training, and tailored business solutions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                <Award className="mr-1 h-4 w-4" />
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Setting New Standards</h2>
              <p className="text-muted-foreground md:text-xl">
                We envision a business landscape where companies of all sizes have access to professional marketing,
                training, and business expertise. Our goal is to set new standards in the industry by delivering
                exceptional results and building lasting partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Our diverse team of experts brings together years of experience in marketing, training, and business
                development.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.position}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Experience & Expertise</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                With over 15 years in the industry, we've helped hundreds of businesses achieve their goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Approach</h3>
              <ul className="space-y-2">
                {approach.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Industry Experience</h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="rounded-lg border bg-card p-3 text-center shadow-sm">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  {
    name: "Mahdi Farhi",
    position: "CEO & Marketing Strategist",
    bio: "With 15+ years in marketing, Alex has helped numerous businesses transform their marketing strategies.",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Takoa Farhi",
    position: "Head of Training",
    bio: "Jamie specializes in creating effective training programs that enhance skills and boost productivity.",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Taylor Reed",
    position: "Business Solutions Director",
    bio: "Taylor brings extensive experience in developing tailored business solutions for companies of all sizes.",
    avatar: "/placeholder.svg?height=120&width=120",
  },
]

const approach = [
  "Client-centered approach with personalized strategies",
  "Data-driven decision making and analysis",
  "Continuous learning and adaptation to market trends",
  "Transparent communication and reporting",
  "Focus on measurable results and ROI",
  "Long-term partnerships built on trust",
]

const industries = [
  "Technology",
  "Healthcare",
  "Retail",
  "Finance",
  "Education",
  "Manufacturing",
  "Hospitality",
  "Non-profit",
]

