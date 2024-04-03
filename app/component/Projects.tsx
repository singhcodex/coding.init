'use client'

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { SiAngular, SiDocker, SiMaterialdesign, SiNextdotjs, SiReact, SiReactquery, SiTailwindcss } from "react-icons/si"

export default function Projects(){
    const projects = [
        {
            title: "Portfolio App",
            tech: [SiNextdotjs, SiReactquery, SiTailwindcss],
            link:"http://localhost:3000",
            cover: "/project-01.png",
            background: "bg-green-500"
        },
        {
            title: "Sample App",
            tech: [SiAngular, SiDocker, SiMaterialdesign],
            link:"http://localhost:3000",
            cover: "/project-01.png",
            background: "bg-white"
        }
    ]
    return (
        <div className="py-10 p-5 sm:p-0">
            <div className="flex flex-col items-center justify-center">
                <h4 className="text-lg lg:text-2xl font-bold">Projects 🚀</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, index) => {
                    return <Link href={project.link} key={index}>
                        <div className={cn("p-3 rounded-md", project.background)}>
                            <DirectionAwareHover
                                imageUrl={project.cover}
                                className="w-full space-y-5">
                                    <div className="space-y-5">
                                    <h1 className="text-2xl font-bold">{project.title}</h1>
                                    <div className="flex items-center gap-5">
                                        {project.tech.map((Icon, index) => {
                                            return <Icon className="w-8 h-8" key={index} />
                                        })}
                                    </div>
                                    </div>
                                
                            </DirectionAwareHover>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}