"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLDivElement | null;
    const cursorFollower = document.querySelector(".cursor-follower") as HTMLDivElement | null;
    const links = document.querySelectorAll("a");

    if (cursor && cursorFollower) {
      const handleMouseMove = (e: MouseEvent) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
        cursorFollower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
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
      });

      // Cleanup function to remove event listeners when the component unmounts
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        links.forEach((link) => {
          link.removeEventListener("mouseover", handleLinkMouseOver);
          link.removeEventListener("mouseleave", handleLinkMouseLeave);
        });
      };
    }
  }, []);

  return (
    <>
      <style>
        {`
          .cursor {
              position: fixed;
              width: var(--cursor-size, 20px);
              height: var(--cursor-size, 20px);
              background-color: var(--cursor-color, #000);
              border-radius: 50%;
              pointer-events: none;
              z-index: 999;
              transition: transform 0.1s ease, background-color 0.2s ease;
          }
          .cursor-follower {
              position: fixed;
              width: var(--follower-size, 40px);
              height: var(--follower-size, 40px);
              background-color: var(--follower-bg, transparent);
              border: 2px solid var(--follower-border-color, #000);
              border-radius: 50%;
              pointer-events: none;
              z-index: 999;
              transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease, background-color 0.2s ease, opacity 0.2s ease;
              transform: translate(-10px, -10px);
          }
          .cursor-follower.active {
              width: var(--follower-active-size, 60px);
              height: var(--follower-active-size, 60px);
              background-color: var(--follower-active-bg, #000);
              border-color: var(--follower-active-border-color, #000);
              opacity: 0.5;
          }
        `}
      </style>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  );
}
