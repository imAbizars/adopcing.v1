import React from "react";
import logo from "@/assets/logo/logoadopcing.png";

export default function Logo() {
  return (
    <div className="w-12 h-12">
      <img className="object-cover w-full h-full" src={logo} alt="Logo" />
    </div>
  );
}
