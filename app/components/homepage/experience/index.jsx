"use client";
// @flow strict
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[1px] bg-neutral-800"></span>
          <span className="bg-neutral-900 border border-neutral-800 w-fit text-white px-5 py-2 text-xl rounded-md uppercase tracking-wider font-mono">
            Experience
          </span>
          <span className="w-24 h-[1px] bg-neutral-800"></span>
        </div>
      </div>

      <div className="py-8 flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="flex flex-col gap-6">
            {
              experiences.map((experience, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  key={experience.id}
                >
                  <GlowCard identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-start gap-x-6 px-3 py-5">
                        <div className="text-[#16f2b3] transition-all duration-300 hover:scale-125 mt-1">
                          <BsPersonWorkspace size={28} />
                        </div>
                        <div>
                          <p className="text-base sm:text-lg font-bold uppercase text-white mb-1">
                            {experience.title}
                          </p>
                          <p className="text-sm text-[#16f2b3] font-mono mb-2">{experience.company}</p>
                          {experience.description && (
                            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{experience.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;