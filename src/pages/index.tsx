// "use client";

// import React, { useState } from "react";
// import { HeroSection } from "@/components/landing/HeroSection";
// import { Navbar } from "@/components/landing/Navbar";
// import { useRouter } from "next/navigation";
// import TestimonialsSection from "../components/landing/TestimonialsSection";
// import { LeaderboardSection } from "@/components/landing/LeaderboardSection";
// import FeaturesSection from "../components/landing/FeaturesSection";

// export default function Home() {
//   const router = useRouter();
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showSignUpModal, setShowSignUpModal] = useState(false);

//   const handleLoginClick = () => {
//     router.push("/signup");
//   };

//   const handleSignupSubmit = () => {
//     router.push("/login");
//   };
//   return (
//     <main className="min-h-screen bg-gray-900 text-white">
//       <Navbar onLoginClick={handleLoginClick} />
//       <HeroSection onSignUp={() => router.push("/signup")} />
//       <LeaderboardSection />
//       <TestimonialsSection />
//       <FeaturesSection />

//     </main>
//   );
// }


"use client";

import React from "react";
import { HeroSection } from "@/components/landing/HeroSection";
import { Navbar } from "@/components/landing/Navbar";
import { useRouter } from "next/navigation";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import { LeaderboardSection } from "@/components/landing/LeaderboardSection";
import FeaturesSection from "../components/landing/FeaturesSection";

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/signup");
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar onLoginClick={handleLoginClick} />
      <HeroSection onSignUp={() => router.push("/signup")} />
      <LeaderboardSection />
      <TestimonialsSection />
      <FeaturesSection />
    </main>
  );
}