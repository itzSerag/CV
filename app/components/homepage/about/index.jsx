"use client";
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Projects Shipped" },
  { value: "2+", label: "Years Experience" },
  { value: "250+", label: "LeetCode Solved" },
  { value: "3", label: "Cloud Platforms" },
];

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-24 relative z-50">
      {/* Background Glow */}
      <div className="hidden lg:block w-[400px] h-[400px] bg-violet-600/10 rounded-full absolute top-10 right-10 filter blur-[120px] opacity-40"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Text and Stats */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#16f2b3]"></span>
              <span className="font-mono text-sm lg:text-base uppercase tracking-widest text-[#16f2b3]">
                Who I am
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16f2b3] to-violet-500">Robust Backend</span> Solutions.
            </h2>
            <p className="text-neutral-400 text-sm lg:text-lg leading-loose mb-10">
              {personalData.description}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/40 backdrop-blur-sm overflow-hidden hover:border-[#16f2b3]/50 transition-all duration-300"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#16f2b3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-[#16f2b3] transition-colors duration-300 relative z-10">
                  {stat.value}
                </span>
                <span className="text-[10px] lg:text-xs text-neutral-500 text-center uppercase tracking-widest font-mono relative z-10">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-neutral-800 group shadow-2xl">
            {/* Outer animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#16f2b3] to-violet-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>
            
            <Image
              src={personalData.profile}
              fill
              alt="Serag Eldien"
              className="object-cover rounded-3xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;