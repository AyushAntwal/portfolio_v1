"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursorFollower = document.querySelector(".cursor-follower") as HTMLDivElement | null;
    const links = document.querySelectorAll("a");

    if (cursorFollower) {
      const handleMouseMove = (e: MouseEvent) => {
        cursorFollower.style.transform = `translate(${e.clientX - cursorFollower.offsetWidth / 2}px, ${
          e.clientY - cursorFollower.offsetHeight / 2
        }px)`;
      };

      const handleLinkMouseOver = () => {
        cursorFollower.classList.add("active");
      };

      const handleLinkMouseLeave = () => {
        cursorFollower.classList.remove("active");
      };

      document.addEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.addEventListener("mouseover", handleLinkMouseOver);
        link.addEventListener("mouseleave", handleLinkMouseLeave);
        link.addEventListener("mouseout", handleLinkMouseLeave);
      });

      // Cleanup function to remove event listeners when the component unmounts
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        links.forEach((link) => {
          link.removeEventListener("mouseover", handleLinkMouseOver);
          link.removeEventListener("mouseleave", handleLinkMouseLeave);
          link.removeEventListener("mouseout", handleLinkMouseLeave);
        });
      };
    }
  }, []);

  return (
    <>
      <style>
        {`
            .cursor-follower {
                position: fixed;
                background: radial-gradient(circle, rgb(44 122 215 / 13%) 0%, rgb(15 23 42 / 0%) 40%);
                transition: transform 0.1s ease, width 0.1s ease, height 0.1s ease, background-color 0.1s ease, opacity 0.2s ease, box-shadow 0.2s ease;
                transform: translate(-50%, -50%);
            }
        `}
      </style>
      <div className="cursor-follower pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
    </>
  );
}
