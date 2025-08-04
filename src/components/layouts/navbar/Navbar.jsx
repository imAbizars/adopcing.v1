import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* mobile version */}
      <nav className="sticky top-0 z-50 flex items-center justify-between p-4 py-6 bg-[var(--third-background)] border-b-3">
        <div className="border border-4 p-2 pr-3 pb-3 rounded-xl">
          <Button
            onClick={toggleSideBar}
            className="text-2xl font-bold z-50 focus:outline-none px-2"
          >
            {isOpen ? "✕" : "☰"}
          </Button>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-54 pt-20 bg-[var(--third-background)] z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-10">
          <ul className="space-y-5 text-2xl">
            <Link
              to="/"
              onClick={toggleSideBar}
              className="block p-4 rounded-xl hover:bg-[#FFE380]"
            >
              Home
            </Link>
            <Link
              to="/Addopt"
              onClick={toggleSideBar}
              className="block p-4 rounded-xl hover:bg-[#FFE380]"
            >
              Addopt
            </Link>
            <Link
              to="/cage&foods"
              onClick={toggleSideBar}
              className="block p-4 rounded-xl hover:bg-[#FFE380]"
            >
              Cage&Foods
            </Link>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[var(--third-background)]/30 backdrop-blur-sm z-30"
          onClick={toggleSideBar}
        ></div>
      )}
      {/* end mobile version */}
    </>
  );
}
