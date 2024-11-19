"use client"; // Ensuring this is a client-side component

import React, { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Profile from "@/components/Profile";  // Ensure Profile is correctly exported

import { TextGenerateEffectDemo } from "@/components/TextGenerateEffectDemo";
import Softwaretext from "@/components/Softwaretext";
import { MarqueeDemo } from "@/components/MarqueeDemo";

       // Ensure Text is correctly exported

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading delay
    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, []);

  return (
    <>
      {loading ? (
        <Preloader /> // Display Preloader while loading
      ) : (
        <>
          <Profile /> 
          <TextGenerateEffectDemo/>
          <Softwaretext/>
          <MarqueeDemo/>
          
            
        </>
      )}
    </>
  );
}
