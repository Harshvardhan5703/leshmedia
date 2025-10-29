"use client";

import {
  IconAi,
  IconArrowDownRhombus,
  IconArrowLeftRhombus,
  IconArrowRightRhombus,
  IconArrowUpRight,
  IconBrandGithub,
  IconBulb,
  IconChevronRight,
  IconCode,
  IconComet,
  IconSearch,
  IconShield,
  IconSitemap,
  IconSparkles,
  IconTestPipe,
  IconTools,
  IconWand,
} from "@tabler/icons-react";
import ViewportAnimation from "./ViewportAnimation";

import Link from "next/link";
import BookButton from "./BookButton";

export const CardLight = () => {
  return (
    <ViewportAnimation
      off={{ opacity: 0, width: 0 }}
      on={{
        opacity: 0.4,
        width: "auto",
        transition: { delay: 0.3, duration: 5 },
      }}
      once={false}
    >
      <div className="w-36 h-36 rounded-full bg-white/5 blur-2xl absolute -top-4 -left-4"></div>
      <div className="w-10 h-10 rounded-full bg-white/5 blur-2xl absolute -top-4 -left-4"></div>
      <div className="w-2 h-36 bg-gradient-to-b from-white to-transparent opacity-60 absolute -top-14 left-4 rotate-[-40deg] blur-md"></div>
      <div className="w-2 h-36 bg-gradient-to-b from-white to-transparent opacity-60 absolute -top-14 left-4 rotate-[-40deg] blur-sm"></div>

      <div className="w-2 h-36 bg-gradient-to-b from-white to-transparent opacity-20 absolute -top-10 left-1 rotate-[-20deg] blur-sm"></div>
      <div className="w-2 h-36 bg-gradient-to-b from-white to-transparent opacity-20 absolute -top-10 left-1 rotate-[-20deg] blur-md"></div>
      <div className="w-2 h-36 bg-gradient-to-b from-white to-transparent opacity-20 absolute -top-10 left-1 rotate-[-10deg] blur-md"></div>
      <div className="w-2 h-36 bg-gradient-to-b from-white to-transparent opacity-20 absolute -top-10 left-1 rotate-[-0deg] blur-md"></div>

      <div className="w-2 h-36 bg-gradient-to-b from-white to-transparent opacity-20 absolute -top-14 left-1 rotate-[-30deg] blur-sm"></div>
      <div className="w-2 h-36 bg-gradient-to-b from-white to-transparent opacity-20 absolute -top-20 left-1 rotate-[-30deg] blur-sm"></div>
      <div className="w-2 h-36 bg-gradient-to-b from-white to-transparent opacity-20 absolute -top-20 left-1 rotate-[-50deg] blur-sm"></div>
      <div className="w-2 h-36 bg-gradient-to-b from-white to-transparent opacity-20 absolute -top-20 left-1 rotate-[-60deg] blur-sm"></div>

      <div className="w-0.5 h-0.5 rounded-full bg-white absolute top-4 right-8 z-20 opacity-60" />

      <div className="w-0.5 h-0.5 rounded-full bg-white absolute top-12 right-16 z-20 opacity-60" />

      <div className="w-0.5 h-0.5 rounded-full bg-white absolute top-20 right-12 z-20 opacity-60" />
      <div className="w-0.5 h-0.5 rounded-full bg-white absolute top-6 right-36 z-20 opacity-60" />
      <div className="w-0.5 h-0.5 rounded-full bg-white absolute top-8 right-48 z-20 opacity-60" />
      <div className="w-0.5 h-0.5 rounded-full bg-white absolute top-28 right-36 ml-3 z-20 opacity-60" />
    </ViewportAnimation>
  );
};

const Card0: () => React.ReactNode = () => {
  return (
    <ViewportAnimation
      className="w-full p-7 h-72 border rounded-2xl flex flex-col overflow-hidden text-left relative border-white/15"
      once={false}
      off={{ opacity: 0, translateY: "20px" }}
      on={{ opacity: 1, translateY: 0, transition: { delay: 0.2 } }}
    >
      <CardLight />

      <div className="w-24 h-24 absolute top-0 left-0 backdrop-blur-sm z-10"></div>

      <div className="text-sm mb-2 flex items-center gap-2 z-20">
        <IconComet size={22} className="text-blue-300" />
        Web Development and designing
      </div>
      <div className="text-xs opacity-70 max-w-lg z-20">
        We do Website Development, Website Designing, E-Commerce Website Development & Landing Pages.

      </div>
      <div className="w-full h-36"></div>
      <div className="w-[120%] h-[70%] absolute -left-14 bottom-12 border-b-1 border-border/40 rounded-t-none"></div>
      <div className="w-[120%] h-[70%] absolute -left-14 bottom-24 border-b-1 border-border/40 rounded-t-none"></div>
      <div className="h-24 w-1 absolute left-14 bottom-0 border-r-1 border-border/40 rounded-t-none"></div>
      <div className="h-24 w-1 absolute right-14 bottom-0 border-r-1 border-border/40 rounded-t-none"></div>

      <div className="absolute bottom-4 left-8 z-10">
        <ViewportAnimation
          off={{ opacity: 0, translateX: "-10px" }}
          on={{
            opacity: 1,
            translateX: 0,
            transition: { delay: 0.5, type: "spring", stiffness: 200 },
          }}
          once={false}
        >
          <div className="min-w-16 max-w-16 min-h-16 max-h-16 rounded-2xl border border-border/50 bg-background flex items-center justify-center relative">
            <IconBulb size={30} className="opacity-70" />
          </div>
        </ViewportAnimation>
      </div>

      <div className="absolute bottom-4 right-8 z-10">
        <ViewportAnimation
          off={{ opacity: 0, translateX: "10px" }}
          on={{
            opacity: 1,
            translateX: 0,
            transition: { delay: 0.5, type: "spring", stiffness: 200 },
          }}
          once={false}
        >
          <div className="min-w-16 max-w-16 min-h-16 max-h-16 rounded-2xl border border-border/50 bg-background flex items-center justify-center relative">
            <IconBrandGithub size={28} className="opacity-70" />
          </div>
        </ViewportAnimation>
      </div>

      <ViewportAnimation
        off={{ opacity: 0, left: "10%" }}
        on={{
          opacity: 100,
          left: "84%",
          transition: {
            duration: 5,
            repeat: Infinity,
            delay: 1,
          },
        }}
        once={false}
        className="w-6 h-0.5 absolute bottom-12 z-0"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent to-blue-400 rounded-r-full z-20 blur-[0.7px]"></div>
      </ViewportAnimation>
      <ViewportAnimation
        off={{ opacity: 0, left: "10%" }}
        on={{
          opacity: 100,
          left: "84%",
          transition: {
            duration: 5,
            repeat: Infinity,
            delay: 1,
          },
        }}
        once={false}
        className="w-1 h-0.5 absolute bottom-12 z-0"
      >
        <div className="w-full h-full bg-blue-400 rounded-r-full z-20 ml-5 blur-sm"></div>
      </ViewportAnimation>
      <ViewportAnimation
        off={{ opacity: 0, left: "10%" }}
        on={{
          opacity: 100,
          left: "84%",
          transition: {
            duration: 5,
            repeat: Infinity,
            delay: 1,
          },
        }}
        once={false}
        className="w-1 h-0.5 absolute bottom-12 z-0"
      >
        <div className="w-full h-full bg-blue-400 rounded-r-full z-20 ml-5 blur-sm"></div>
      </ViewportAnimation>
      <ViewportAnimation
        off={{ opacity: 0, left: "10%" }}
        on={{
          opacity: 100,
          left: "87%",
          transition: {
            duration: 5,
            repeat: Infinity,
            delay: 1,
          },
        }}
        once={false}
        className="w-6 h-0.5 absolute bottom-12 z-0"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent z-20 blur-sm"></div>
      </ViewportAnimation>
      <ViewportAnimation
        off={{ opacity: 0, left: "10%" }}
        on={{
          opacity: 100,
          left: "87%",
          transition: {
            duration: 5,
            repeat: Infinity,
            delay: 1,
          },
        }}
        once={false}
        className="w-6   h-0.5 absolute bottom-12 z-0"
      >
        <div className="w-full h-full bg-blue-400 z-20 blur-md"></div>
      </ViewportAnimation>
    </ViewportAnimation>
  );
};

const Card1: () => React.ReactNode = () => {
  return (
    <ViewportAnimation
      once={false}
      off={{ opacity: 0, translateY: "20px" }}
      on={{ opacity: 1, translateY: 0, transition: { delay: 0.4 } }}
      className="w-full md:min-w-[32%] md:max-w-[32%] p-7 h-72 border rounded-2xl flex flex-col overflow-hidden text-left relative border-white/15 flex flex-col"
    >
      <CardLight />
      {/* <div className="w-full absolute bottom-28 left-0 h-4 border-b-1 border-border/50 z-10"></div> */}
      <div className="absolute top-8 left-0 w-full flex items-center justify-center">
        <div className="w-12 h-12 border rounded-2xl bg-accent/20 backdrop-blur flex items-center justify-center relative overflow-hidden mr-2">
          <IconAi size={40} />
          <div className="w-2 h-4 absolute top-0 bg-white/30 blur-md"></div>
          <div className="w-2 h-4 absolute bottom-0 bg-white/30 blur-md"></div>
        </div>
      </div>

      <div className="absolute top-14 right-10 z-10">
        <div className="w-7 h-7 border rounded-full bg-accent/20 backdrop-blur flex items-center justify-center relative overflow-hidden border-border/80 bg-accent/20 backdrop-blur">
          <IconShield size={14} />
          <div className="w-2 h-2 absolute top-0 bg-blue-400 blur-md"></div>
        </div>
      </div>
      <div className="absolute top-16 right-0 w-10">
        <div className="border-b-1 mt-1 w-full border-border/30 absolute"></div>
        <div className="border-b-1 mt-1 w-full border-border/30 absolute blur-sm"></div>
      </div>

      <div className="absolute top-20 right-14 w-16 rotate-[-40deg]">
        <div className="border-b-1 mt-3 w-full border-border/30 absolute"></div>
        <div className="border-b-1 mt-3 w-full border-border/30 absolute blur-sm"></div>
      </div>
      <div className="absolute top-20 right-16 z-10">
        <div className="w-7 h-7 border rounded-full bg-accent/20 backdrop-blur flex items-center justify-center relative overflow-hidden border-border/80 bg-accent/20 backdrop-blur mr-6 mt-4">
          <IconTestPipe size={14} />
          <div className="w-2 h-2 absolute top-0 bg-blue-400 blur-md"></div>
        </div>
      </div>

      <div className="absolute top-36 right-14 w-14 rotate-[90deg]">
        <div className="border-b-1 mt-4 w-full border-border/30 absolute"></div>
        <div className="border-b-1 mt-4 w-full border-border/30 absolute blur-sm"></div>
      </div>

      <div className="absolute top-14 left-10 z-10">
        <div className="w-7 h-7 border rounded-full bg-accent/20 backdrop-blur flex items-center justify-center relative overflow-hidden border-border/80 bg-accent/20 backdrop-blur">
          <IconSitemap size={14} />
          <div className="w-2 h-2 absolute top-0 bg-blue-400 blur-md"></div>
        </div>
      </div>
      <div className="absolute top-16 left-0 w-10">
        <div className="border-b-1 mt-1 w-full border-border/30 absolute"></div>
        <div className="border-b-1 mt-1 w-full border-border/30 absolute blur-sm"></div>
      </div>

      <div className="absolute top-20 left-14 w-16 rotate-[50deg]">
        <div className="border-b-1 mt-4 w-full border-border/30 absolute"></div>
        <div className="border-b-1 mt-4 w-full border-border/30 absolute blur-sm"></div>
      </div>
      <div className="absolute top-20 left-20 z-10">
        <div className="w-7 h-7 border rounded-full bg-accent/20 backdrop-blur flex items-center justify-center relative overflow-hidden border-border/80 bg-accent/20 backdrop-blur mr-6 mt-4">
          <IconCode size={14} />
          <div className="w-2 h-2 absolute top-0 bg-blue-400 blur-md"></div>
        </div>
      </div>

      <div className="absolute top-36 left-20 w-14 rotate-[90deg]">
        <div className="border-b-1 mt-3 w-full border-border/30 absolute"></div>
        <div className="border-b-1 mt-3 w-full border-border/30 absolute blur-sm"></div>
      </div>

      <div className="h-full"></div>
      <div className="text-sm mb-2 flex items-center gap-2 z-20">
        Quality is all
      </div>
      <div className="text-xs opacity-70 max-w-lg z-20">
        We use state of the art practices to ensure you get the best marketing results with AI assistance.
      </div>
    </ViewportAnimation>
  );
};

const Card2: () => React.ReactNode = () => {
  return (
    <ViewportAnimation
      once={false}
      off={{ opacity: 0, translateY: "20px" }}
      on={{ opacity: 1, translateY: 0, transition: { delay: 0.6 } }}
      className="w-full p-7 h-72 border rounded-2xl flex flex-col overflow-hidden text-left relative border-white/15 flex flex-col"
    >
      <CardLight />
      <div className="w-full flex items-center justify-center gap-3 p-2">
        <div className="w-8 h-8 flex items-center justify-center border rounded-xl bg-accent/20">
          <IconSearch size={14} />
        </div>
        <IconArrowRightRhombus size={18} className="opacity-50" />
        <div className="w-8 h-8 flex items-center justify-center border rounded-xl bg-accent/20">
          <IconTools size={14} />
        </div>
        <IconArrowRightRhombus size={18} className="opacity-50" />
        <div className="w-8 h-8 flex items-center justify-center border rounded-xl bg-accent/20">
          <IconCode size={14} />
        </div>
        <div></div>
      </div>
      <div className="w-full flex items-center justify-end gap-3 pr-10">
        <IconArrowDownRhombus size={18} className="opacity-50 mr-1" />
      </div>
      <div className="w-full flex items-center justify-center gap-3 p-2">
        <div className="w-8 h-8 flex items-center justify-center border rounded-xl bg-accent/20 opacity-0">
          <IconSearch size={14} />
        </div>
        <IconArrowLeftRhombus size={18} className="opacity-0" />
        <div className="w-8 h-8 flex items-center justify-center border rounded-xl bg-blue-400/10 border-blue-400/60 text-blue-300">
          <IconBrandGithub size={14} />
        </div>
        <IconArrowLeftRhombus size={18} className="opacity-50" />
        <div className="w-8 h-8 flex items-center justify-center border rounded-xl bg-accent/20">
          <IconTestPipe size={14} />
        </div>
        <div></div>
      </div>

      <div className="h-full"></div>
      <div className="text-sm mb-2 flex items-center gap-2 z-20">
        Social Media and Marketing
      </div>
      <div className="text-xs opacity-70 max-w-lg z-20">
        We help you grow your brand's presence across social media platforms,
        engage with your audience, and drive targeted traffic to your product.
      </div>
    </ViewportAnimation>
  );
};

const Card3: () => React.ReactNode = () => {
  return (
    <ViewportAnimation
      once={false}
      off={{ opacity: 0, translateY: "20px" }}
      on={{ opacity: 1, translateY: 0, transition: { delay: 0.8 } }}
      className="w-full p-7 h-72 border rounded-2xl flex flex-col overflow-hidden text-left relative border-white/15 flex flex-col"
    >
      <CardLight />

      {/* <div className="absolute top-0 left-0 w-full flex flex-col p-6 pl-14 gap-3 text-xs opacity-40">
        <div className="font-semibold">Your MVP tech stack</div>
        <div className="">
          - Next.js 14 with App router
          <br /> - Tailwindcss
          <br /> ...
        </div>
      </div> */}

      <div className="h-full"></div>

      <div
        className="w-full p-3 pt-4 pb-4 border-l-1 rounded-none bg-background/90 backdrop-blur-lg relative overflow-hidden flex items-center gap-3 border-blue-300/60 mb-6"
        style={{
          boxShadow: "0px 20px 14px 4px rgba(0, 0, 0, .50)",
        }}
      >
        <div className="absolute w-full h-24 bg-white/5 opacity-50 blur-2xl"></div>
        {/* <input
          autoComplete="off"
          placeholder={`Ask AI to change the tech stack..`}
          className="w-full bg-transparent outline-none resize-none text-xs z-30 disabled:opacity-60 disabled:cursor-not-allowed"
        /> */}
        <div className="flex items-center justify-end gap-2">
          <IconArrowUpRight
            className="opacity-70 group-hover:opacity-100"
            size={15}
          />
        </div>
      </div>

      <div className="absolute bottom-24 left-0 w-full"></div>

      <div className="text-sm mb-2 flex items-center gap-2 z-20">
        Personalized Photoshoots
      </div>
      <div className="text-xs opacity-70 max-w-lg z-20">
        We create stunning visuals that capture your brand's essence and
        captivate your audience.
      </div>
    </ViewportAnimation>
  );
};

const Card4: () => React.ReactNode = () => {
  return (
    <ViewportAnimation
      once={false}
      off={{ opacity: 0, translateY: "20px" }}
      on={{ opacity: 1, translateY: 0, transition: { delay: 1 } }}
      className="w-full p-7 h-72 border rounded-2xl flex flex-col overflow-hidden text-left relative border-blue-400/50 bg-blue-400/3 flex flex-col"
    >
      <CardLight />
      <div className="text-md font-bold mb-2 flex items-center gap-2 z-20 mt-6">
        Ready to grow your brand?
      </div>
      <div className="text-xs opacity-70 max-w-lg z-20">
        Let's talk about your project. Contact us today for a free, no-obligation consultation and discover how we can help you achieve your goals.
      </div>
      <div className="mt-20" >
      <BookButton/>

      </div>
      
    </ViewportAnimation>
  );
};

export default function Services() {
  return (
    <>
      <div
        className="w-full flex flex-col items-center "
        id="services"
      >
        <div className="w-[80%] min-h-screen flex flex-col items-center gap-5 mt-20 text-center">
          <div
            className="p-1 pl-3 pr-3 border flex items-center gap-2 text-xl bg-accent/20 rounded-full text-blue-300 overflow-hidden"
            style={{ boxShadow: "0px 0px 200px 0px #60a5fa" }}
          >
            
            Services
          </div>
          
          <div className="w-full flex flex-col gap-5 mt-5">
            <div className="w-full flex flex-col md:flex-row md:items-center gap-5 md:pr-20 md:pl-20">
              <Card0 />
              <Card1 />
            </div>
            <div className="w-full flex flex-col md:flex-row md:items-center gap-5 md:pr-20 md:pl-20">
              <Card2 />
              <Card3 />
              <Card4 />
            </div>
          </div>
          <div className="flex items-center gap-5"></div>
        </div>
      </div>
    </>
  );
}
