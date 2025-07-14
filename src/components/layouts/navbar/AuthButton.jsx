import React from "react";
import { Button } from "@/components/ui/button";

export default function AuthButtons() {
  return (
    <li className="space-x-3">
      <a href="">
        <Button>Sign In</Button>
      </a>
      <a href="">
        <Button>Sign Up</Button>
      </a>
    </li>
  );
}
