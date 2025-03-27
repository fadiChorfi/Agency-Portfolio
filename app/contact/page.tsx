"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";

const GoogleMap = dynamic(() => import("@/components/GoogleMap"), {
  ssr: false,
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "",
        budget: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Have a question or ready to start a project? Contact us today
                and let's discuss how we can help your business grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels or fill out the
                  form to get started.
                </p>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Our Office</h3>
                        <p className="text-sm text-muted-foreground">
                          Tebessa
                          <br />
                          Boulevard Emir Abdelkader,
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Email Us</h3>
                        <p className="text-sm text-muted-foreground">
                          info@marketprosolutions.com
                        </p>
                        <p className="text-sm text-muted-foreground">
                          support@marketprosolutions.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Call Us</h3>
                        <p className="text-sm text-muted-foreground">
                          <span>0550318695</span> <br />
                          <span>0795787873</span> <br />
                          <span>0795282716</span> <br />
                        </p>
                        <p className="text-sm text-muted-foreground">
                          sat-Thur: 8:30 AM - 4:30 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>saturday - Thursday</div>
                  <div>8:30 AM - 4:30 PM</div>
                  <div>Friday</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>
              {isSubmitted ? (
                <Card className="bg-primary/10 border-primary">
                  <CardContent className="p-6">
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">Thank You!</h3>
                      <p>
                        Your message has been received. We'll get back to you
                        shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+213XXXXXXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>I'm interested in:</Label>
                    <RadioGroup
                      value={formData.interest}
                      onValueChange={(value) =>
                        handleSelectChange("interest", value)
                      }
                      className="grid gap-2 sm:grid-cols-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="marketing" id="marketing" />
                        <Label htmlFor="marketing" className="font-normal">
                          Marketing Services
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="training" id="training" />
                        <Label htmlFor="training" className="font-normal">
                          Training Programs
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business" className="font-normal">
                          Business Solutions
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        handleSelectChange("budget", value)
                      }
                    >
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-5k">
                          Less than $5,000
                        </SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">
                          $10,000 - $25,000
                        </SelectItem>
                        <SelectItem value="25k-50k">
                          $25,000 - $50,000
                        </SelectItem>
                        <SelectItem value="more-50k">
                          More than $50,000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Visit Our Office
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                We're conveniently located in the heart of the city. Stop by for
                a coffee and a chat!
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border bg-background shadow">
            <div className="h-[400px] w-full bg-muted">
              {/* Replace with actual map component or iframe */}
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Book a free 30-minute consultation to discuss your business
                needs and how we can help.
              </p>
            </div>
            <Button size="lg" className="mt-4">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
