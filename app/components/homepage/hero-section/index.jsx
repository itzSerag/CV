"use client";
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

const ROLES = [
  "Backend Software Engineer",
  "NestJS & Node.js Developer",
  "API & Microservices Expert",
  "Cloud Infrastructure (AWS)",
];

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-16">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-16 gap-y-12 w-full">
        {/* Left — Text & CTAs */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2">
          <p className="text-xs font-mono tracking-widest text-[#16f2b3] uppercase mb-3">
            Available for hire · Cairo, Egypt
          </p>
          <h1 className="text-3xl font-bold leading-tight text-white md:font-extrabold lg:text-[2.8rem] lg:leading-[3.5rem] mb-4">
            Hi, I&apos;m{" "}
            <span className="text-[#16f2b3]">{personalData.name}</span>
          </h1>

          {/* Typewriter role */}
          <div className="text-lg lg:text-2xl text-neutral-400 font-semibold mb-8 h-9 flex items-center">
            <span>{displayed}</span>
            <span className="terminal-cursor ml-1"></span>
          </div>

          <p className="text-neutral-500 text-sm lg:text-base leading-relaxed max-w-md mb-10">
            {personalData.description}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6 mb-10">
            {personalData.github && (
              <Link href={personalData.github} target="_blank"
                className="transition-all text-neutral-500 hover:text-[#16f2b3] hover:scale-110 duration-300">
                <BsGithub size={24} />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link href={personalData.linkedIn} target="_blank"
                className="transition-all text-neutral-500 hover:text-[#16f2b3] hover:scale-110 duration-300">
                <BsLinkedin size={24} />
              </Link>
            )}
            {personalData.facebook && (
              <Link href={personalData.facebook} target="_blank"
                className="transition-all text-neutral-500 hover:text-[#16f2b3] hover:scale-110 duration-300">
                <FaFacebook size={24} />
              </Link>
            )}
            {personalData.leetcode && (
              <Link href={personalData.leetcode} target="_blank"
                className="transition-all text-neutral-500 hover:text-[#16f2b3] hover:scale-110 duration-300">
                <SiLeetcode size={24} />
              </Link>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link href="#contact"
              className="px-6 py-3 rounded-full bg-[#16f2b3] text-black text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#12cc97] hover:scale-105 flex items-center gap-2">
              <span>Hire Me</span>
              <RiContactsFill size={16} />
            </Link>
            <a href={personalData.resume} target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-neutral-800 bg-[#0d0d0f] hover:bg-[#18181c] text-white text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:border-[#16f2b3]/50 hover:scale-105 flex items-center gap-2">
              <span>Resume</span>
              <MdDownload size={16} />
            </a>
          </div>
        </div>

        {/* Right — Backend Server Console */}
        <div className="order-1 lg:order-2 border-[#1f1f23] relative rounded-xl border bg-gradient-to-br from-[#0c0c0e] to-[#040405] p-0.5 shadow-2xl">
          <div className="bg-[#08080a] rounded-[10px] overflow-hidden">
            <div className="flex flex-row items-center justify-between border-b border-[#1f1f23] px-4 py-3">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500/85"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/85"></div>
                <div className="h-3 w-3 rounded-full bg-emerald-500/85"></div>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                serag@backend-server:~
              </span>
            </div>

            <div className="px-5 py-6 font-mono text-xs md:text-sm leading-relaxed text-neutral-200">
              <div className="flex items-center justify-between mb-4 border-b border-neutral-800/40 pb-4">
                <span className="text-neutral-500 uppercase tracking-wider text-[10px]">System Status</span>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16f2b3] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#16f2b3]"></span>
                  </span>
                  <span className="text-[#16f2b3] font-bold uppercase tracking-wider text-xs">Online</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 mb-6 text-[11px] md:text-xs">
                <div><span className="text-neutral-500">Runtime:</span> <span className="text-[#16f2b3]">Node.js v22</span></div>
                <div><span className="text-neutral-500">Framework:</span> <span className="text-white">NestJS</span></div>
                <div><span className="text-neutral-500">Database:</span> <span className="text-white">PostgreSQL + Redis</span></div>
                <div><span className="text-neutral-500">Latency:</span> <span className="text-cyan-400">&lt;10ms</span></div>
                <div><span className="text-neutral-500">Cloud:</span> <span className="text-amber-300">AWS (S3, SES, EC2)</span></div>
                <div><span className="text-neutral-500">Containers:</span> <span className="text-white">Docker + Nginx</span></div>
              </div>

              <div className="border-t border-neutral-800/40 pt-4 mb-4">
                <span className="text-neutral-500 block mb-2 uppercase tracking-wider text-[10px]">Live Logs</span>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex gap-2 text-neutral-400">
                    <span className="text-neutral-600">[18:38:12]</span>
                    <span>✓ DB pool initialized (max: 20 connections)</span>
                  </div>
                  <div className="flex gap-2 text-cyan-400/90">
                    <span className="text-neutral-600">[18:38:13]</span>
                    <span>✓ WebSocket gateway ready on port 8080</span>
                  </div>
                  <div className="flex gap-2 text-emerald-400/90">
                    <span className="text-neutral-600">[18:38:13]</span>
                    <span>✓ NestJS API listening on :5000</span>
                  </div>
                  <div className="flex gap-2 text-amber-400/80">
                    <span className="text-neutral-600">[18:38:14]</span>
                    <span>→ Redis cache connected</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 pt-2 text-[#16f2b3] font-bold">
                <span className="text-neutral-500">$</span>
                <span>npm run start:prod</span>
                <span className="terminal-cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
