import React from "react";

export default function NavItem({ href, label }) {
  return (
    <li>
      <a href={href} className="group relative inline-block pt-2">
        <span className="pb-2 inline-block group transition">{label}</span>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 delay-100 ease-out group-hover:w-full transform -translate-x-1/2"></span>
      </a>
    </li>
  );
}
