"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Logo } from "@/components/Logo";
import { sidebarNav } from "./sidebarNav";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const selected = usePathname();

  return (
    <>
      <div
        className={cn(
          true ? "hidden" : "mt-16 border-t lg:border-t-0 lg:mt-0",
          "fixed z-50 overflow-y-scroll lg:overflow-hidden xl:flex left-0 h-screen  w-[240px] bg-background  ",
        )}
      >
        <div className="flex  w-full flex-col items-center ">
          <div>
            <Logo />
          </div>
          <div className="flex p-2 w-full flex-col overflow-auto items-center ">
            <div className="w-full  flex flex-col">
              {sidebarNav.map((section, idx) => (
                <>
                  <h4 key={idx} className="text-slate-400 my-1 font-medium">
                    {section.title}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {section.btns.map((i) => (
                      <Btn {...i} key={i.href} />
                    ))}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex w-full px-4 flex-col gap-1.5">
            <div className="flex text-slate-400 font-medium justify-between">
              <p>Storage</p>
              <p className="text-sky-400">10%</p>
            </div>
            <Progress className="h-2 bg-black" value={10} />
            <p className="text-[13.5px] font-semibold">
              <span className="text-sky-400 font-semibold">10MB</span> of
              <span className="font-semibold">&nbsp;500 MB</span>
            </p>
          </div>

          <a
            href="https://github.com/AlandSleman/StorageBox"
            target="_blank"
            className={cn(
              "transition-colors bg-primary w-full gap-2 font-semibold px-6 py-3.5  duration-300 cursor-pointer flex flex-row items-center",
              false
                ? "bg-gradient-to-r from-blue-600/90 to-blue-600/10  hover:from-blue-600 hover:to-blue-600/20"
                : "hover:bg-blue-700/80",
            )}
          >
            <Github className="" />
            Source Code
          </a>
        </div>
      </div>
    </>
  );
  function Btn(p: { text: string; href: string; icon: JSX.Element }) {
    return (
      <Link href={p.href}>
        <Button
          className="w-full justify-start gap-2 h-12"
          variant={selected === p.href ? "default" : "ghost"}
        >
          {p.icon}
          {p.text}
        </Button>
      </Link>
    );
  }
}
