// import { cn } from "@/lib/utils";
// import Marquee from "./ui/marquee";

// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ];

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }: {
//   img: string;
//   name: string;
//   username: string;
//   body: string;
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

// export function MarqueeDemo() {
//   return (
//     <div className="relative  flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
//       {/* <Marquee pauseOnHover className="[--duration:20s]">
//         {firstRow.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee> */}
//       <Marquee reverse pauseOnHover className="[--duration:20s]">
//         {secondRow.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
//     </div>
//   );
// }





import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import Image from "next/image";

const tools = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/768px-Adobe_Premiere_Pro_CC_icon.svg.png", // Adobe Premiere Pro
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Capcut-logo.svg/768px-Capcut-logo.svg.png?20230913004633", // CapCut
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/768px-Adobe_After_Effects_CC_icon.svg.png?20210519030120", // Adobe After Effects
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/600px-Figma-logo.svg.png?20190122211436", // Figma
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", // Adobe Photoshop
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/DaVinci_Resolve_17_logo.svg/120px-DaVinci_Resolve_17_logo.svg.png?20211228192035", // DaVinci Resolve
  },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <Image
  className="object-contain"
  alt="Software Logo"
  src={img}
  width={500} // Set the desired width
  height={300} // Set the desired height
/>

    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="bg-black">
    <div className="relative flex w-full max-w-[800px] md:max-w-[1200px] mx-auto flex-col items-center justify-center overflow-hidden rounded-lg  bg-black md:shadow-xl">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {tools.map((tool, index) => (
          <ReviewCard key={index} img={tool.img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
    </div>
  );
}
