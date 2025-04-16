"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { beforeAfterResults, caseStudies } from "@/data/data"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ZoomIn, X, Maximize2, Minimize2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useEffect, useRef, useState } from "react"

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    title: string
    description: string
  } | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const touchStartRef = useRef({ x: 0, y: 0 })
  const touchMoveRef = useRef({ x: 0, y: 0 })
  const { toast } = useToast()

  function openImageModal(imageSrc: string, title: string, description: string) {
    setSelectedImage({
      src: imageSrc,
      title,
      description,
    })
    setIsZoomed(false)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  // Show a toast when the modal opens on mobile to inform users about touch gestures
  useEffect(() => {
    if (selectedImage ) {
      toast({
        title: "Image Viewer",
        description: "Pinch to zoom, swipe down to close",
        duration: 3000,
      })
    }
  }, [selectedImage, toast])

  // Handle touch events for the modal
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      }
      touchMoveRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      }
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchMoveRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      }
    }
  }

  const handleTouchEnd = () => {
    const deltaY = touchMoveRef.current.y - touchStartRef.current.y

    // If swiped down more than 100px, close the modal
    if (deltaY > 100) {
      closeImageModal()
    }
  }

  // Double tap to zoom
  const handleDoubleTap = () => {
    toggleZoom()
  }

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
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="flex flex-wrap justify-center">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="post-design">Post Design</TabsTrigger>
                <TabsTrigger value="logos">Logos</TabsTrigger>
                <TabsTrigger value="package-design">Package Design</TabsTrigger>
                <TabsTrigger value="banner-design">Banner Design</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies.map((study, index) => (
                  <CaseStudyCard
                    key={index}         
                    caseStudy={study}
                    onImageClick={(src) => openImageModal(src, study.title, study.description)}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="marketing" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies
                  .filter((study) => study.category === "marketing")
                  .map((study, index) => (
                    <CaseStudyCard
                      key={index}
                      caseStudy={study}
                      onImageClick={(src) => openImageModal(src, study.title, study.description)}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="training" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies
                  .filter((study) => study.category === "training")
                  .map((study, index) => (
                    <CaseStudyCard
                      key={index}
                      caseStudy={study}
                      onImageClick={(src) => openImageModal(src, study.title, study.description)}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="business" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies
                  .filter((study) => study.category === "business")
                  .map((study, index) => (
                    <CaseStudyCard
                      key={index}
                      caseStudy={study}
                      onImageClick={(src) => openImageModal(src, study.title, study.description)}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="post-design" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies
                  .filter((study) => study.category === "post-design")
                  .map((study, index) => (
                    <CaseStudyCard
                      key={index}
                      caseStudy={study}
                      onImageClick={(src) => openImageModal(src, study.title, study.description)}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="logos" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies
                  .filter((study) => study.category === "logos")
                  .map((study, index) => (
                    <CaseStudyCard
                      key={index}
                      caseStudy={study}
                      onImageClick={(src) => openImageModal(src, study.title, study.description)}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="package-design" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies
                  .filter((study) => study.category === "package-design")
                  .map((study, index) => (
                    <CaseStudyCard
                      key={index}
                      caseStudy={study}
                      onImageClick={(src) => openImageModal(src, study.title, study.description)}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="banner-design" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies
                  .filter((study) => study.category === "banner-design")
                  .map((study, index) => (
                    <CaseStudyCard
                      key={index}
                      caseStudy={study}
                      onImageClick={(src) => openImageModal(src, study.title, study.description)}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Before & After Results */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
                    <div
                      className="overflow-hidden rounded-lg border group relative cursor-pointer"
                      onClick={() =>
                        openImageModal(
                          result.beforeImage || "/placeholder.svg",
                          `${result.title} - Before`,
                          result.description,
                        )
                      }
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ZoomIn className="text-white w-8 h-8" />
                      </div>
                      <Image
                        src={result.beforeImage || "/placeholder.svg"}
                        alt={`Before - ${result.title}`}
                        width={300}
                        height={200}
                        className="aspect-video object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <p className="text-center text-sm font-medium">Before</p>
                  </div>
                  <div className="space-y-2">
                    <div
                      className="overflow-hidden rounded-lg border border-primary group relative cursor-pointer"
                      onClick={() =>
                        openImageModal(
                          result.afterImage || "/placeholder.svg",
                          `${result.title} - After`,
                          result.description,
                        )
                      }
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ZoomIn className="text-white w-8 h-8" />
                      </div>
                      <Image
                        src={result.afterImage || "/placeholder.svg"}
                        alt={`After - ${result.title}`}
                        width={300}
                        height={200}
                        className="aspect-video object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <p className="text-center text-sm font-medium">After</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && closeImageModal()}>
        <DialogContent
          className="max-w-fit p-0 overflow-hidden bg-background border"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative">
            {selectedImage && (
              <div className="flex flex-col">
                <div
                  className={`bg-white p-1 rounded-lg overflow-auto ${isZoomed ? "max-h-[80vh]" : ""}`}
                  onDoubleClick={handleDoubleTap}
                >
                  <Image
                    ref={imageRef}
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.title}
                    width={1200}
                    height={800}
                    className={`${
                      isZoomed
                        ? "max-w-none w-auto h-auto max-h-none scale-150 cursor-zoom-out"
                        : "max-h-[70vh] w-auto object-contain cursor-zoom-in"
                    } transition-transform duration-200 m-auto`}
                  />
                </div>
               
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function CaseStudyCard({
  caseStudy,
  onImageClick,
}: {
  caseStudy: any
  onImageClick: (src: string) => void
}) {
  return (
    <Card className="overflow-hidden">
      <div
        className="relative cursor-pointer group"
        onClick={() => onImageClick(caseStudy.image || "/placeholder.svg")}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
          <ZoomIn className="text-white w-8 h-8" />
        </div>
        <Image  
          src={caseStudy.image || "/placeholder.svg"}
          alt={caseStudy.title || "Case study image"}
          width={400}
          height={225}
          className="aspect-video object-cover w-full transition-transform group-hover:scale-105"
        />
        
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
        <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{caseStudy.date}</span>
          
        </div>
      </CardContent>
    </Card>
  )
}
