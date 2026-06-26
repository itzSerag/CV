"use client";
// @flow strict

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

function ProjectCard({ project }) {
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)", willChange: "transform" }}
      className="from-[#0c0c0e] border-neutral-800/80 relative rounded-xl border bg-gradient-to-br to-[#040405] w-full hover:border-[#16f2b3]/30 p-6 lg:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left info column */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono text-[#16f2b3] uppercase tracking-widest bg-[#16f2b3]/10 px-2.5 py-1 rounded">
                {project.role}
              </span>
              <span className="text-xs font-mono text-neutral-600">
                0{project.id} /
              </span>
            </div>

            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 hover:text-[#16f2b3] transition-colors duration-300">
              {project.name}
            </h3>

            <p className="text-neutral-400 text-sm lg:text-base leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.filter(Boolean).map((tool, index) => (
                <span
                  key={index}
                  className="text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 px-3 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6">
              {project.code && (
                <Link
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-neutral-400 hover:text-[#16f2b3] transition-colors duration-300"
                >
                  <FaGithub size={18} />
                  <span>Source Code</span>
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-neutral-400 hover:text-[#16f2b3] transition-colors duration-300"
                >
                  <FiExternalLink size={18} />
                  <span>Live Demo</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right image column */}
        <div className="lg:col-span-5 relative w-full h-48 lg:h-64 rounded-lg overflow-hidden border border-neutral-800/60 group cursor-pointer bg-neutral-950">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              fill
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;