"use client";
// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div id="skills" className="relative z-50 my-12 lg:my-24">
      {/* Cool background glow */}
      <div className="hidden lg:block w-[300px] h-[300px] bg-[#16f2b3]/10 rounded-full absolute top-10 left-1/2 -translate-x-1/2 filter blur-[100px] opacity-50"></div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-4">
          <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
          <span className="text-[#16f2b3] font-mono tracking-widest text-sm lg:text-xl uppercase bg-[#16f2b3]/10 px-6 py-2 rounded-lg border border-[#16f2b3]/20 shadow-[0_0_15px_rgba(22,242,179,0.1)]">
            My Arsenal
          </span>
          <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
        </div>
      </div>

      <div className="w-full my-12 mt-16">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const imgData = skillsImage(skill);
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (id * 0.05) % 0.5 }}
                className="w-40 min-w-fit h-fit flex flex-col items-center justify-center m-3 sm:m-5 rounded-2xl group relative cursor-pointer"
                key={id}
              >
                {/* Glossy card backdrop */}
                <div className="h-full w-full rounded-2xl border border-neutral-800/60 bg-neutral-900/40 backdrop-blur-sm group-hover:bg-neutral-900/80 group-hover:border-[#16f2b3]/50 transition-all duration-300 shadow-xl overflow-hidden relative">
                  
                  {/* Neon top line effect */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3]/0 group-hover:via-[#16f2b3] to-transparent transition-all duration-500"></div>

                  <div className="flex flex-col items-center justify-center gap-4 p-6 relative z-10">
                    <div className="h-12 w-12 flex items-center justify-center bg-black/30 rounded-xl border border-white/5 group-hover:scale-110 group-hover:border-[#16f2b3]/30 transition-transform duration-300">
                      {imgData?.src ? (
                        <Image
                          src={imgData.src}
                          alt={skill}
                          width={32}
                          height={32}
                          className="h-8 w-auto rounded"
                        />
                      ) : (
                        <span className="text-[#16f2b3] font-bold text-xl">{skill.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <p className="text-neutral-300 font-semibold text-sm sm:text-base group-hover:text-[#16f2b3] transition-colors duration-300">
                      {skill}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;