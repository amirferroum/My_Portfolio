'use client';

import Header from '@/components/Header/Header';
import Image from 'next/image';
import projects from '@/data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './style.module.scss';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Rounded from "@/common/RoundedButton";

export async function generateStaticParams() {
  return projects.map((_, index) => ({
    id: index.toString()
  }));
}

export default function ProjectDetail({ params }) {
  const { id } = params;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const projectIndex = parseInt(id, 10);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Sticky header */}
      <div className="top-0 z-50 bg-white shadow-md">
        <Header textColor="text-black" />
      </div>

      {/* Project details */}
      <div className="px-8 md:px-48 pb-6">
        <div className="px-8 md:px-48 pt-32 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#334BD3] text-center md:text-left">
              {project.title}
            </h1>

            <motion.div style={{ x }} className="w-fit">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Rounded backgroundColor={"#334BD3"}>
                    <p>Live Site</p>
                  </Rounded>
                </a>
              ) : (
                <Rounded backgroundColor={"#999"} className="cursor-not-allowed opacity-50">
                  <p>No Live Link</p>
                </Rounded>
              )}
            </motion.div>
          </div>
        </div>

        {/* MacBook frame with project image inside screen */}
        <div className="relative w-full max-w-[800px] mx-auto mb-12">
          <div
            className="absolute top-[28%] left-[16.5%] w-[67%] h-[42%] overflow-hidden z-30"
            style={{ backgroundColor: '#f0f0f0' }}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              className="h-full"
            >
              {project.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={`/assets/${img}`}
                    alt={`${project.title} image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* MacBook frame */}
          <Image
            src="/laptop_realistic1.svg"
            alt="MacBook Frame"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto' }}
            className="relative z-20 pointer-events-none select-none"
          />
        </div>

        {/* Project description */}
        <p className="text-lg font-semibold text-center leading-10 pb-40">
          {project.description}
        </p>
      </div>

      {/* Phone images */}
      {project.phoneImages?.length > 0 && (
        <div className="px-8 md:px-48 py-40 bg-[#1C1D20]">
          <div className="relative" ref={container}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.phoneImages.map((img, idx) => {
                const { scrollY } = useScroll();
                const offsetY = useTransform(scrollY, value =>
                  Math.sin(value / 300 + idx) * 40
                );

                return (
                  <motion.div
                    key={idx}
                    style={{ y: offsetY }}
                    className="relative w-full h-[800px] rounded-xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src={`/assets/${img}`}
                      alt={`Phone view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Contact Footer */}
      <footer
        ref={container}
        className="bg-[#141516] text-white px-16 lg:px-48 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10">
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/assets/profile_pic.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold">Let's work</h2>
                <h2 className="text-4xl font-bold">together</h2>
              </div>
            </div>

            <div>
              <Rounded backgroundColor={"#334BD3"}>
                <p className="cursor-pointer">Get in touch</p>
              </Rounded>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-10 gap-6 text-white">
            <Rounded>
              <p>amirferroum@gmail.com</p>
            </Rounded>
            <Rounded>
              <p>+213 699 82 67 33</p>
            </Rounded>
          </div>

          <div className="mt-10 flex justify-between text-sm opacity-80">
            <div>
              <h3 className="uppercase font-semibold">Version</h3>
              <p>2024 © Edition</p>
            </div>
            <div>
              <h3 className="uppercase font-semibold mb-2">Socials</h3>
              <p className="cursor-pointer hover:underline">Instagram</p>
              <p className="cursor-pointer hover:underline">Dribbble</p>
              <p className="cursor-pointer hover:underline">Linkedin</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
