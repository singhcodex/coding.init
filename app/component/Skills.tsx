'use client'

import { HoverEffect } from "@/components/ui/card-hover";
import { SiAngular, SiDocker, SiExpress, SiGithub, SiKubernetes, SiNextdotjs, SiReact, SiSpringboot, SiTailwindcss } from "react-icons/si";

export default function Skills() {

  const skills = [
    {
      text: "React",
      Icon: SiReact

    },
    {
      text: "NextJs",
      Icon: SiNextdotjs

    },
    {
      text: "Angular",
      Icon: SiAngular

    },
    {
      text: "ExpressJs",
      Icon: SiExpress

    },
    {
      text: "TailwindCss",
      Icon: SiTailwindcss

    },
    {
      text: "SpringBoot",
      Icon: SiSpringboot

    },
    {
      text: "Docker",
      Icon: SiDocker

    },
    {
      text: "kubernetes",
      Icon: SiKubernetes

    },
    {
      text: "GitHub",
      Icon: SiGithub

    },
  ]
      return (
        <>
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-lg lg:text-2xl font-bold">Skills 🛠️</h4>
          </div>

          <HoverEffect items={skills}></HoverEffect>
          
        </div>
        </>
      );
    }