import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-4">
        <Image src="https://sm.ms/image/9ocbHEv7Wh4wjOy" alt="Berkeley Summit House Logo" width={40} height={40} />
      </header>
      
      <main className="px-4 space-y-12">
        <section className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-4xl font-serif italic mb-4">Wandering in the AI era at the Summit</h1>
            <Image src="/summit-image-1.jpg" alt="Summit gathering" width={400} height={300} className="object-cover" />
          </div>
          <div>
            <Image src="/summit-image-2.jpg" alt="Summit discussion" width={400} height={300} className="object-cover" />
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <h2 className="text-3xl font-serif col-span-2">Be part of us to spark convo & ideas <span className="text-gray-400">about the newest tech trend</span></h2>
          <Image src="/collaboration.jpg" alt="Collaboration" width={400} height={200} className="object-cover" />
          <Image src="/historical.jpg" alt="Historical image" width={400} height={200} className="object-cover grayscale" />
        </section>

        <section>
          <h3 className="text-2xl font-serif mb-4">Topics we <span className="italic">care</span> about</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-bold">AI in product & their making</h4>
              <Image src="/topic-1.jpg" alt="AI in product" width={300} height={200} className="object-cover" />
            </div>
            <div>
              <h4 className="font-bold">AI model infrastructure</h4>
              <Image src="/topic-2.jpg" alt="AI infrastructure" width={300} height={200} className="object-cover" />
            </div>
            <div>
              <h4 className="font-bold">AI & energy industry</h4>
              <Image src="/topic-3.jpg" alt="AI in energy" width={300} height={200} className="object-cover" />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <h2 className="text-3xl font-serif col-span-2">Join the community to interpret & lead the <span className="font-bold">future together</span></h2>
          <Image src="/community-1.jpg" alt="Community image 1" width={200} height={200} className="object-cover" />
          <Image src="/community-2.jpg" alt="Community image 2" width={200} height={200} className="object-cover" />
        </section>

        <section className="bg-black text-white p-8">
          <h2 className="text-3xl font-serif mb-4">Embrace AI boom <span className="italic">as Human</span></h2>
          <ul className="space-y-2">
            <li>• Connect</li>
            <li>• Learn</li>
            <li>• Support</li>
            <li>• Reflect</li>
          </ul>
          <Image src="/embrace-ai.jpg" alt="Embracing AI" width={400} height={200} className="object-cover mt-4" />
        </section>

        <section>
          <h2 className="text-3xl font-serif mb-4">Upcoming <span className="italic">to the summit...</span></h2>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-bold">AI Infrastructure Workshop</h4>
              <p>2 hr forum</p>
            </div>
            <div>
              <h4 className="font-bold">Sustainability & AI Panel</h4>
              <p>1 hr panel</p>
            </div>
            <div>
              <h4 className="font-bold">AI Hardware Discussion</h4>
              <p>3 hr workshop</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white p-8 mt-12">
        <h2 className="text-6xl font-bold mb-4">JOIN US</h2>
        <Image src="https://sm.ms/image/9ocbHEv7Wh4wjOy" alt="Berkeley Summit House Logo" width={60} height={60} />
      </footer>
    </div>
  )
}
