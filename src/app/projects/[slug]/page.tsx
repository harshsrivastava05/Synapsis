"use client"
import React, { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { projects2 } from "@/components/ProjectsDetail";

interface CarouselSlide {
  image: string;
  title: string;
}

interface ProjectType {
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; description: string; icon: React.ReactNode }[];
  carouselSlides: CarouselSlide[];
}

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const { slug } = use(params);
  const projectRaw = projects2[slug as keyof typeof projects2];
  if (!projectRaw) notFound();

  const project: ProjectType = {
    ...projectRaw,
    carouselSlides: (projectRaw.carouselSlides as string[]).map((img) => ({
      image: img,
      title: projectRaw.title,
    })),
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl font-medium text-gray-600 mb-8 ">{project.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselPrevious className="absolute m-2 left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white text-gray-900 shadow rounded-full w-10 h-10 flex items-center justify-center transition" />
                <CarouselContent>
                  {project.carouselSlides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full aspect-video bg-black rounded-sm flex items-center justify-center">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={960}
                          height={540}
                          className="w-full h-full object-contain rounded-sm"
                          sizes="100vw"
                          priority={index === 0}
                        />
                        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-sm">
                          <h3 className="text-lg font-normal">{slide.title}</h3>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext className="absolute m-2 right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white text-gray-900 shadow rounded-full w-10 h-10 flex items-center justify-center transition" />
              </Carousel>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              Project Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl ">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Key Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 p-8 rounded-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-gray-700 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-normal text-gray-900 mb-3">
                      {index + 1}. {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;