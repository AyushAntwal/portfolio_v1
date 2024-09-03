"use client";
import Image from "next/image";
import Link from "next/link";
import { MutableRefObject, useEffect, useRef } from "react";
import Cursor from "./utils/Cursor";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const allLinks = document.querySelectorAll(".scroll-indicators a") as NodeListOf<HTMLAnchorElement>;
            const currentLink = document.querySelector(`.scroll-indicators a[href="#${entry.target.id}"]`) as HTMLAnchorElement;
            allLinks.forEach((link) => {
              link.classList.remove("active");
            });
            currentLink.classList.add("active");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      }
    );
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <div className="h-screen grid grid-cols-1 bg-slate-900 text-white/80 md:grid-cols-2 text-pretty">
      <div className="h-full flex flex-col gap-4 justify-center items-center">
        <div className="flex  w-4/5 flex-col gap-3">
          <h1 className="font-extrabold text-5xl">Ayush Antiwal</h1>
          <h2 className="font-mono font-bold items-center text-[#e15560]"> <span className="text-2xl ">{"{"}</span>  WEB DEVELOPER <span className="text-2xl text-red">{"}"}</span> </h2>
          <p className="text-sm text-pretty">Crafting innovative, responsive, and accessible web experiences with modern design expertise.</p>
          <div className="scroll-indicators hidden md:block">
            <p>
              <Link href="#section1">Div 1</Link>
            </p>
            <p>
              <Link href="#section2"> Div 2</Link>
            </p>
            <p>
              <Link href="#section3"> Div 3</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-full scroll-smooth">
        <div id="section1" className="h-full section bg-slate-900"></div>
        <div id="section2" className="h-full section bg-gray-500"></div>
        <div id="section3" className="h-full section bg-gray-900"></div>
      </div>
      <Cursor />
    </div>
  );
}
