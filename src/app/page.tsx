import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-furniture.jpg" 
            alt="Modern furniture in a minimalist living room" 
            fill 
            priority
            className="object-cover brightness-95"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">Crafting Timeless Furniture</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Where artisanal craftsmanship meets modern design. Discover furniture that transforms spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Explore Collection</Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/20 hover:text-white">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each piece is a testament to our unwavering commitment to quality, sustainability, and timeless design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Scandinavian Collection",
              description: "Minimalist designs with clean lines and natural materials",
              image: "/scandinavian-collection.jpg"
            },
            {
              title: "Mid-Century Modern",
              description: "Iconic pieces inspired by the golden era of furniture design",
              image: "/mid-century-collection.jpg"
            },
            {
              title: "Contemporary Luxury",
              description: "Bold statement pieces for the modern connoisseur",
              image: "/contemporary-collection.jpg"
            },
          ].map((collection, i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-md">
              <div className="relative h-64 w-full">
                <Image 
                  src={collection.image} 
                  alt={collection.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <CardTitle className="text-xl mb-2">{collection.title}</CardTitle>
                <CardDescription>{collection.description}</CardDescription>
                <Button variant="link" className="p-0 h-auto mt-4">
                  View Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[500px]">
            <Image 
              src="/workshop.jpg" 
              alt="Our furniture craftsmen at work" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Craftsmanship in Every Detail</h2>
            <p className="text-muted-foreground mb-6">
              For over two decades, our studio has been dedicated to the art of furniture making. 
              Every piece is handcrafted by our skilled artisans using traditional techniques 
              passed down through generations, combined with modern innovation.
            </p>
            <p className="text-muted-foreground mb-8">
              We believe that furniture should be more than functional—it should tell a story, 
              evoke emotion, and stand the test of time. That's why we source only the finest 
              sustainable materials and pay meticulous attention to every detail.
            </p>
            <Button>Our Story</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "The attention to detail and quality of craftsmanship exceeded our expectations. Our custom dining table has become the centerpiece of our home.",
              author: "Sarah & Michael",
              location: "New York"
            },
            {
              quote: "Working with this studio was a pleasure from start to finish. They truly understood our vision and created pieces that perfectly complement our space.",
              author: "James Wilson",
              location: "Los Angeles"
            },
            {
              quote: "The sustainable practices and ethical sourcing of materials was what initially drew us to the studio, but the exceptional quality of their work is why we keep coming back.",
              author: "Emma Thompson",
              location: "Chicago"
            },
          ].map((testimonial, i) => (
            <Card key={i} className="p-8">
              <svg className="h-10 w-10 text-muted-foreground mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 text-lg">{testimonial.quote}</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're looking for a statement piece or an entire collection, our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
              Book a Consultation
            </Button>
            <Button variant="secondary" size="lg">
              Visit Our Showroom
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card px-4 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Furniture Studio</h3>
            <p className="text-muted-foreground">
              Crafting exceptional furniture since 2002. Dedicated to quality, sustainability, and timeless design.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Collections</h4>
            <ul className="space-y-3">
              {["Scandinavian", "Mid-Century Modern", "Contemporary", "Custom Designs"].map((item, i) => (
                <li key={i}>
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Information</h4>
            <ul className="space-y-3">
              {["About Us", "Sustainability", "Process", "Testimonials", "FAQ"].map((item, i) => (
                <li key={i}>
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground">
              <p>123 Atelier Street</p>
              <p>Design District</p>
              <p>New York, NY 10001</p>
              <p className="mt-4">hello@furniturestudio.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Furniture Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Terms", "Privacy", "Cookies"].map((item, i) => (
              <Button key={i} variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-foreground">
                {item}
              </Button>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
