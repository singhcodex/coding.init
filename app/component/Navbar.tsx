import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiLinkedin, SiYoutube, SiGithub } from "react-icons/si";



export default function Navbar({className}: {className?:string}) {
    const socials = [
        {
            link: "#",
            label: "Linkedin",
            Icon: SiLinkedin
        },
        {
            link: "#",
            label: "Github",
            Icon: SiGithub
        },
        {
            link: "#",
            label: "Youtube",
            Icon: SiYoutube
        }
    ]
    return (
        <nav className={cn("py-10 flex justify-between items-center", className)}> 
            <h1 className="text-2xl font-bold"> Coding.init {"💻"} </h1>
            <div className="flex item-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.Icon;

                    return (
                        <Link href={social.link} key={index} aria-label={social.label}>
                            <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                        </Link>)
                })}
            </div>

        </nav>)
}