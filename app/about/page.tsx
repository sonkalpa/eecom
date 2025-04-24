import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Globe, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Welcome to StyleStride, where fashion meets passion. Founded in 2020, we've been on a mission to redefine online fashion shopping by offering curated collections that blend contemporary trends with timeless elegance.
          </p>
          <p className="text-lg text-muted-foreground">
            Our journey began with a simple idea: to create a space where fashion enthusiasts could discover unique pieces that reflect their individual style while maintaining the highest standards of quality and sustainability.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About StyleStride"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Passion for Fashion</h3>
                <p className="text-sm text-muted-foreground">
                  We're driven by our love for fashion and commitment to bringing you the latest trends and timeless classics.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Customer First</h3>
                <p className="text-sm text-muted-foreground">
                  Your satisfaction is our priority. We strive to provide exceptional service and a seamless shopping experience.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  We're committed to sustainable fashion and reducing our environmental impact through ethical sourcing and practices.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Every item in our collection is carefully selected to ensure the highest quality standards.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Sarah Johnson"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold mb-1">Sarah Johnson</h3>
            <p className="text-sm text-muted-foreground mb-2">Founder & Creative Director</p>
          </div>

          <div className="text-center">
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Michael Chen"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold mb-1">Michael Chen</h3>
            <p className="text-sm text-muted-foreground mb-2">Head of Design</p>
          </div>

          <div className="text-center">
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Emily Rodriguez"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold mb-1">Emily Rodriguez</h3>
            <p className="text-sm text-muted-foreground mb-2">Customer Experience Manager</p>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="text-center bg-accent/30 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Join Our Fashion Community</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Be the first to know about new collections, exclusive offers, and fashion tips. Join our community of fashion enthusiasts.
        </p>
        <Button size="lg">
          Subscribe to Newsletter
        </Button>
      </div>
    </div>
  )
} 