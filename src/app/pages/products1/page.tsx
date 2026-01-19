import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CombinedGalleryPage() {
  const photos = [
    { id: 1, src: "https://picsum.photos/id/10/400/300", alt: "Nature" },
    { id: 2, src: "https://picsum.photos/id/20/400/300", alt: "Tech" },
    { id: 3, src: "https://picsum.photos/id/30/400/300", alt: "Architecture" },
    { id: 4, src: "https://picsum.photos/id/40/400/300", alt: "Animals" },
    { id: 5, src: "https://picsum.photos/id/50/400/300", alt: "Travel" },
    { id: 6, src: "https://picsum.photos/id/60/400/300", alt: "Food" },
  ];

  const buttonData = [
    { name: "Gallery", href: "#gallery-section" },
    { name: "Map Location", href: "#map-section" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Team", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-15 py-10 space-y-20 scroll-smooth">
      
      {/* --- Top Sticky Nav: เปลี่ยนเป็นสีแดงเมื่อ Hover --- */}
      <div className="flex justify-center gap-4 sticky top-4 z-50">
        <Link 
          href="#gallery-section" 
          className={cn(
            buttonVariants({ variant: "secondary" }), 
            "rounded-full shadow-lg  hover:text-red-500 transition-colors"
          )}
        >
          Go to Gallery
        </Link>
        <Link 
          href="#map-section" 
          className={cn(
            buttonVariants({ variant: "secondary" }), 
            "rounded-full shadow-lg hover:text-red-500 transition-colors"
          )}
        >
          Go to Map
        </Link>
      </div>

      <header id="top1" className="text-center" >
        <h1 className="text-4xl font-extrabold tracking-tight">Project Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage your photos and locations in one place</p>
      </header>

      {/* --- 10 Button Group: Mouseover text red-500 --- */}
      <section className="flex flex-col items-center gap-6">
        <h2 className="text-xl font-semibold text-gray-800">Quick Menu</h2>
        <div className="inline-flex flex-wrap justify-center shadow-sm rounded-lg overflow-hidden border border-slate-200 bg-white">
          {buttonData.map((btn, index) => (
            <Link
              key={index}
              href={btn.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "rounded-none border-r last:border-r-0 border-slate-200 px-6 py-6 h-auto transition-all",
                "hover:text-red-500 hover:bg-slate-50 active:text-red-600" // Mouseover เป็นสีแดง
              )}
            >
              {btn.name}
            </Link>
          ))}
        </div>
      </section>

      {/* --- Photo Gallery: Active tab text red-500 --- */}
      <section id="gallery-section" className="pt-10 border-t">
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-500 pl-4">Photo Gallery</h2>
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-slate-100">
              {/* ปรับแต่งสถานะ Active ให้ตัวหนังสือเป็นสีแดง */}
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:text-red-500 data-[state=active]:font-bold"
              >
                All Photos
              </TabsTrigger>
              <TabsTrigger 
                value="recent" 
                className="data-[state=active]:text-red-500 data-[state=active]:font-bold"
              >
                Recent
              </TabsTrigger>
              <TabsTrigger 
                value="favorites" 
                className="data-[state=active]:text-red-500 data-[state=active]:font-bold"
              >
                Favorites
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-0">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="text-center py-10">
            <p className="text-red-500 font-medium mb-6 italic underline">Latest Update: Toffy Boutique Map</p>
            <div className="max-w-2xl mx-auto">
                <Image
                    src="/picture/toffy_boutique_map.jpg"
                    alt="Map"
                    width={800}
                    height={600}
                    className="w-full h-auto border-4 border-red-500 rounded-lg shadow-xl"
                />
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="py-20 text-center border-2 border-dashed rounded-xl border-red-100 bg-red-50/30">
             <p className="text-red-400">No favorite items yet.</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* --- Map Section --- */}
      <section id="map-section" className="pt-20 border-t pb-20">
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-500 pl-4">Store Location</h2>
        <div className="max-w-4xl mx-auto">
          <Image
            src="/picture/toffy_boutique_map.jpg"
            alt="Full Map"
            width={1920}
            height={1080}
            className="w-full h-auto border border-slate-200 rounded-2xl shadow-2xl"
          />
          <div className="mt-6 text-center">
            <p className="font-bold text-xl text-red-600">Toffy Boutique</p>
            <p className="text-muted-foreground">Open Daily 09:00 - 20:00</p>
            <Link href="#top1" className="text-red-500 hover:text-red-700 hover:underline block mt-4 text-sm font-medium">
              ↑ Back to Top
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}