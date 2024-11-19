"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Passionate video editor with a knack for storytelling and a keen eye for detail. Experienced in transforming raw footage into engaging visual stories that captivate audiences. Proficient in editing software and dedicated to delivering high-quality results. Let's collaborate to bring your vision to life on screen. 
`;

export function TextGenerateEffectDemo() {
  return (<div className=" flex text-white bg-black text-justify justify-center px-6 md:px-32 md:text-lg text-sm">
    <TextGenerateEffect words={words}  /></div>
  )
  
}
