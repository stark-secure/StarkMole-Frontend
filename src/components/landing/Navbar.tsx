"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onLoginClick: () => void;
}

export function Navbar({ onLoginClick }: NavbarProps) {
  return (
    <nav
      style={{
        width: "1063px",
        height: "66px",
        position: "fixed",
        top: "40px",
        left: "188px",
        borderRadius: "40px",
        borderWidth: "1px",
        paddingTop: "12px",
        paddingRight: "19px",
        paddingBottom: "12px",
        paddingLeft: "19px",
      }}
      className="z-50 bg-gray-900/80 backdrop-blur-lg border-gray-800 flex items-center"
    >
      {/* Logo */}
      <div className="w-[200px]">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          StarkMole
        </Link>
      </div>

      {/* Center Navigation */}
      <div className="flex-1 flex items-center justify-center gap-8">
        <Link href="/#features" className="text-gray-300 hover:text-white">
          Features
        </Link>
        <Link href="/#how-to-play" className="text-gray-300 hover:text-white">
          How to Play
        </Link>
        <Link href="/#leaderboard" className="text-gray-300 hover:text-white">
          Leaderboard
        </Link>
        <Link href="/#about" className="text-gray-300 hover:text-white">
          About
        </Link>
      </div>

      {/* Login Button */}
      <div className="w-[200px] flex justify-end">
        <Button
          
          style={{
            borderRadius: "33px",
            height: "42px",
          }}
          className="border-blue-400 text-white hover:bg-blue-400  px-8 bg-blue-400"
          onClick={onLoginClick}
        >
          Login
        </Button>
      </div>
    </nav>
  );
}
