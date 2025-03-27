import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Insights & Resources</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Stay updated with the latest trends, strategies, and insights in marketing, training, and business
                solutions.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full appearance-none bg-background pl-8 shadow-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Posts</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="training">Training</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, index) => (
                  <BlogPostCard key={index} post={post} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="marketing" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts
                  .filter((post) => post.category === "marketing")
                  .map((post, index) => (
                    <BlogPostCard key={index} post={post} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="training" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts
                  .filter((post) => post.category === "training")
                  .map((post, index) => (
                    <BlogPostCard key={index} post={post} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="business" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts
                  .filter((post) => post.category === "business")
                  .map((post, index) => (
                    <BlogPostCard key={index} post={post} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Articles</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Our most popular and insightful content to help you stay ahead of the curve.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 md:w-2/3">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-primary">{post.category.toUpperCase()}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            {post.date}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold">{post.title}</h3>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-muted">
                            <Image
                              src={post.author.avatar || "/placeholder.svg"}
                              alt={post.author.name}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                          </div>
                          <span className="text-sm">{post.author.name}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {post.readTime} min read
                        </div>
                      </div>
                      <Button variant="link" className="p-0 h-auto" asChild>
                        <Link href={`/blog/${post.slug}`} className="flex items-center">
                          Read article <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Get the latest insights, tips, and trends delivered straight to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link href="/terms" className="underline underline-offset-2">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function BlogPostCard({ post }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={400}
          height={225}
          className="aspect-video object-cover w-full"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
          {post.category === "marketing" ? "Marketing" : post.category === "training" ? "Training" : "Business"}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                {post.date}
              </div>
            </div>
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-muted-foreground">{post.excerpt}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-muted">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <span className="text-sm">{post.author.name}</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              {post.readTime} min read
            </div>
          </div>
          <Button variant="link" className="p-0 h-auto" asChild>
            <Link href={`/blog/${post.slug}`} className="flex items-center">
              Read article <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const blogPosts = [
  {
    title: "10 Digital Marketing Trends to Watch in 2023",
    excerpt: "Stay ahead of the curve with these emerging digital marketing trends that are shaping the industry.",
    slug: "digital-marketing-trends-2023",
    date: "June 15, 2023",
    category: "marketing",
    image: "/placeholder.svg?height=225&width=400",
    readTime: 5,
    author: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "How to Create an Effective Employee Training Program",
    excerpt: "Learn the key components of successful employee training programs that boost productivity and retention.",
    slug: "effective-employee-training-program",
    date: "May 28, 2023",
    category: "training",
    image: "/placeholder.svg?height=225&width=400",
    readTime: 7,
    author: {
      name: "Jamie Wilson",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "Business Strategies for Uncertain Economic Times",
    excerpt:
      "Navigate economic uncertainty with these proven business strategies that help maintain growth and stability.",
    slug: "business-strategies-uncertain-times",
    date: "April 12, 2023",
    category: "business",
    image: "/placeholder.svg?height=225&width=400",
    readTime: 6,
    author: {
      name: "Taylor Reed",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "Social Media Marketing: Beyond the Basics",
    excerpt: "Take your social media marketing to the next level with advanced strategies and tactics.",
    slug: "social-media-marketing-advanced",
    date: "March 5, 2023",
    category: "marketing",
    image: "/placeholder.svg?height=225&width=400",
    readTime: 8,
    author: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "Leadership Development: Nurturing Future Leaders",
    excerpt: "Discover effective approaches to identify and develop leadership potential within your organization.",
    slug: "leadership-development-approaches",
    date: "February 20, 2023",
    category: "training",
    image: "/placeholder.svg?height=225&width=400",
    readTime: 6,
    author: {
      name: "Jamie Wilson",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "Customer Experience: The Key to Business Growth",
    excerpt: "Learn why customer experience is crucial for business growth and how to improve it effectively.",
    slug: "customer-experience-business-growth",
    date: "January 8, 2023",
    category: "business",
    image: "/placeholder.svg?height=225&width=400",
    readTime: 5,
    author: {
      name: "Taylor Reed",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
]

const featuredPosts = [
  {
    title: "The Future of Marketing: AI and Automation",
    excerpt:
      "Explore how artificial intelligence and automation are revolutionizing marketing strategies and customer engagement.",
    slug: "future-marketing-ai-automation",
    date: "July 3, 2023",
    category: "marketing",
    image: "/placeholder.svg?height=200&width=300",
    readTime: 10,
    author: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "Building a Learning Culture in Your Organization",
    excerpt:
      "Discover how to foster a culture of continuous learning that drives innovation and employee satisfaction.",
    slug: "building-learning-culture",
    date: "June 25, 2023",
    category: "training",
    image: "/placeholder.svg?height=200&width=300",
    readTime: 8,
    author: {
      name: "Jamie Wilson",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
]

