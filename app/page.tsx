"use client";
import Image from "next/image";
import Link from "next/link";
import { MutableRefObject, use, useEffect, useRef } from "react";
import Cursor from "./utils/Cursor";
import ContentLayout from "./components/ContentLayout";
import content from "@/public/data/content.json";
import Card from "./components/Card";
import { Variants, motion } from "framer-motion";
import github from "@/public/icons/github.svg";
import { socials } from "@/public/data/socials";
const cardVariants: Variants = {
  offscreen: {
    x: 50, // Starting position offscreen
    opacity: 0 // Optional: start with zero opacity
  },
  onscreen: {
    x: 0, // End position
    opacity: 1, // Optional: end with full opacity
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5, // Duration of the animation
      stiffness: 50 // Adjust spring stiffness for smoothness
    }
  }
};
const basic = {
  name: "Ayush Antiwal",
  title: "Web Developer",
  summary: "I build user-friendly, efficient, and scalable web applications with modern technologies."
};

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const allLinks = document.querySelectorAll(".scroll-indicators") as NodeListOf<HTMLAnchorElement>;
            const currentLink = document.querySelector(`#indicator-${entry.target.id}`) as HTMLAnchorElement;
            console.log({ allLinks, currentLink });
            allLinks.forEach((link) => {
              link?.classList.remove("active");
            });
            currentLink?.classList.add("active");
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
    <div className="relative bg-slate-900 text-white/90 antialiased duration-100 scroll-smooth">
      <Cursor />
      <div className="min-h-screen mx-auto max-w-screen-lg px-6 py-12 scroll-smooth md:px-12 md:py-20 lg:px-25 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="animate slide lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-slate-200 mt-3 sm:text-5xl">{basic.name}</h1>
              <h2 className="mt-4 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl">{basic.title}</h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-500">{basic.summary}</p>
              <div>
                <ul className=" gap-4 flex-col mt-8 hidden lg:flex">
                  {["about", "experience", "education", "projects", "skills"].map((item, i) => (
                    <li key={i}>
                      <div id={"indicator-" + item} className="scroll-indicators relative">
                        <Link href={`#${item}`}>
                          {item}
                          <div className="i-border duration-500"></div>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-16 flex">
                {socials.map((item, i) => (
                  <a
                    key={i}
                    target="_blank"
                    href={item.link}
                    download={item.name === "Resume" ? "Ayush_Antiwal_Resume.pdf" : undefined}
                    className="group flex relative items-center gap-2 px-2 lg:px-4 py-2 bg-slate-900/75 rounded-lg text-teal-200 hover:bg-slate-900/50"
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>

                    <div className="absolute -top-8 translate-y-5 right-0 left-0 w-fit -scale-50 opacity-0 transition-all duration-300 ease-in-out bg-black/20 text-teal-300 rounded-xl px-3 py-1 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                      {item.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </header>
          <main className="pt-24 text-slate-400 scroll-smooth duration-75 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 section scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">About</h2>
              </div>
              <div className="lg:my-auto text-lg align-middle">
                Back in 2022, I dove deep into the world of web development, starting with projects using the <a>MERN stack and Angular</a>. Since
                then, I’ve had the opportunity to work with leading organizations in technology and innovation, including{" "}
                <a> Lattice Innovations and Nagarro </a>, where I’ve created robust front-end and back-end solutions and improved cloud
                infrastructures. Currently, my focus is on developing seamless single-page applications at Lattice Innovations using Angular, while
                ensuring optimized performance and scalability. I enjoy working at the intersection of back-end efficiency and front-end design,
                making sure applications are both powerful and user-friendly. In my free time, I explore AWS services, keeping up with the latest in
                cloud technology. When I’m not coding, I’m either sharpening my problem-solving skills, learning about new frameworks, or exploring
                nature in Dehradun.
              </div>
            </section>
            <section id="experience" className="mb-16 section scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">Experience</h2>
              </div>
              <ul className="flex flex-col gap-4">
                {content.experience.map((item, i) => (
                  <Card key={i}>
                    <div className="group p-3  grid lg:grid-cols-8 md:grid-cols-8 grid-cols-1 gap-3">
                      <div className="col-span-2 text-slate-500 mt-1 font-semibold uppercase">{item.dates}</div>
                      <div className="col-span-6 flex gap-1 flex-col text-slate-500">
                        <a className="text-xl capitalize group/link text-slate-300">
                          {item.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <div className="font-xl text-slate-300">
                          {item.company}, {item.location}
                        </div>
                        <div className="my-1">{item.responsibilities}</div>
                        <div>
                          <ul className="flex mt-2 flex-wrap text-sm">
                            {item.skills.map((skills, i) => (
                              <li
                                key={i}
                                className="rounded-full px-4 py-1 mr-1.5 mt-2 text-teal-300 font-medium content-center text-nowrap bg-slate-700 shadow-sm "
                              >
                                {skills}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </ul>
            </section>
            <section id="education" className="mb-16 section scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-28">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">Education</h2>
              </div>
              <div className="flex flex-col gap-10">
                {content.education.map((item, i) => (
                  <Card key={i}>
                    <div className="group p-4">
                      <h3 className="text-xl mb-1 text-teal-200 capitalize">
                        {item.institution}, {item.location}
                      </h3>
                      <div className="text-slate-500 mb-2">{item.dates}</div>
                      <div className=" text-lg text-slate-500">{item.degree}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
            <section id="projects" className="mb-16 section scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">Projects</h2>
              </div>
              {content.projects.map((item, i) => (
                <Card key={i}>
                  <div className="group p-4">
                    <h3 className="text-xl mb-1 text-teal-200 capitalize">{item.description}</h3>
                    <div className=" text-lg text-slate-500">{item.description}</div>
                  </div>
                </Card>
              ))}
            </section>
            <section id="skills" className="mb-16 section scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-20">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">Skills</h2>
              </div>
              <div className="space-y-10">
                {Object.entries(content.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-sm mb-3 font-semibold uppercase">{category.replace("_", " ")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <motion.div
                          variants={cardVariants}
                          initial="offscreen"
                          whileInView="onscreen"
                          viewport={{ once: true, amount: "all", margin: "100px" }}
                          key={skill}
                          className="flex items-center px-4 py-1.5 bg-gray-100/35 text-teal-100 rounded-full text-sm"
                        >
                          {skill || <span className="w-4 h-4 mr-2">🔹</span>} {/* Default icon if specific icon is not found */}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-32 section scroll-mt-16 md:mb-24 lg:mb-40 lg:scroll-mt-36">
              <p className="py-8 px-4 text-teal-600 font-light italic text-md ">
                This portfolio website has been developed using <span className="text-teal-400 font-semibold">Next.js</span>,{" "}
                <span className="text-teal-400 font-semibold">Tailwind CSS</span>, and{" "}
                <span className="text-teal-400 font-semibold">Framer Motion</span>, showcasing modern web development practices. It is intended for
                educational purposes, serving as a demonstration of responsive design, smooth animations, and performance optimization techniques. The
                website structure and layout draw inspiration from the portfolio of{" "}
                <a href="https://brittanychiang.com/" target="_blank">
                  {" "}
                  Brittany Chiang
                </a>
                , while adding personalized touches to reflect my unique approach to web development.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
