'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Wearable Safety Tech: Protecting Workers While...",
    description: "Discover how wearable safety technology puts worker wellbeing first while delivering measurable insights.",
    date: "June 12, 2025",
    category: "Business",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
    link: "/blog/wearable-safety-tech"
  },
  {
    title: "Smart PPE Revolution: How Safety Technology is...",
    description: "Explore how smart textiles and sensors are changing the face of personal protective equipment.",
    date: "June 5, 2025",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    link: "/blog/smart-ppe-revolution"
  },
  {
    title: "From Idea to Launch: Our Smart Product Development...",
    description: "Take a look inside how Synapsis transforms innovation into market-ready healthcare technology.",
    date: "May 15, 2025",
    category: "Process",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    link: "/blog/smart-product-development"
  },
  {
    title: "AI in Healthcare: Revolutionizing Patient Care",
    description: "How artificial intelligence is transforming medical diagnostics and patient outcomes across the industry.",
    date: "May 28, 2025",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    link: "/blog/ai-healthcare-revolution"
  },
  {
    title: "Sustainability Meets Technology: Green Innovation",
    description: "Exploring how sustainable practices are being integrated into modern healthcare technology solutions.",
    date: "May 20, 2025",
    category: "Business",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    link: "/blog/sustainability-tech"
  }
];

export function BlogMarquee() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
              Latest Insights
            </h2>
            <p className="text-neutral-700 text-lg">
              Discover the latest trends and innovations in AI-powered healthcare
            </p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto border-black text-black">
            <a href="/blog" className="inline-flex items-center gap-2">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full flex items-center gap-2">
          <button
            aria-label="Previous"
            className="rounded-none p-2 mr-4 bg-neutral-100 hover:bg-neutral-200 text-black"
            onClick={() => instanceRef.current?.prev()}
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <div ref={sliderRef} className="keen-slider flex-1">
            {blogPosts.map((post) => (
              <div className="keen-slider__slide" key={post.link}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
          <button
            aria-label="Next"
            className="rounded-none p-2 bg-neutral-100 hover:bg-neutral-200 text-black"
            onClick={() => instanceRef.current?.next()}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="flex-shrink-0 w-80">
      <Card className="h-full border border-neutral-200 bg-white">
        <div className="relative w-full h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-black text-white text-xs font-semibold px-3 py-1">
              {post.category}
            </span>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="space-y-3">
            <p className="text-sm text-neutral-500">{post.date}</p>
            <h3 className="text-lg font-semibold text-black line-clamp-2 leading-tight">
              {post.title}
            </h3>
            <p className="text-neutral-700 text-sm line-clamp-3 leading-relaxed">
              {post.description}
            </p>
            <a
              href={post.link}
              className="inline-flex items-center gap-2 text-black hover:underline text-sm font-medium transition-colors"
            >
              Read more
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
