import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link target="_blank" href="https://www.facebook.com/share/15ySepPhps/?mibextid=qi2Omg" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/levl_business_entreprise/" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link target="_blank" href="https://www.youtube.com/@levl_business_company" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Youtube</span>
            <Youtube className="h-6 w-6" />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/company/levlbusiness/" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} LevlBusiness Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

