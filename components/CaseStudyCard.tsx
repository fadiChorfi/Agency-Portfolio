import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
                <span className="font-medium text-green-600">
                  {caseStudy.results}
                </span>
              </div>
            </div>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link
                href={`/portfolio/${caseStudy.id}`}
                className="flex items-center"
              >
                Read case study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }