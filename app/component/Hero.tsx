import Link from "next/link";
import Image from "next/image";
import headerImage from "../../public/header_image.svg";
import { MovingBorderBtn } from "@/components/ui/moving-border";


export default function Hero(){
    return (
        <div className="min-h-[60vh] flex flex-col-reverse gap-10 lg:flex-row lg:gap-0 items-center justify-between">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold">Hi Everyone! 👋<br/> <span className="lg:text-2xl">I am Simernjeet Singh.</span></h1>
                <p className="md:w-96 text-lg text-gray-300  ">
                    Based in Deutschland, I am a Fullstack developer with 3 years of experience in Angular, TypeScript, PHP. 
                    I believe in creating User friendly and easy to understand web Applications.
                </p>
                <Link href={"mailto:singh.hessen@gmail.com"} className="inline-block hover:scale-125 hover:text-green-500 transition-all">
                    <div>
                        <h4 className="text-lg lg:text-2xl font-bold">Contact me 📫</h4>
                    </div>
                </Link>
            </div>
            <div className="relativ">
                <div className="w-85 h-85 space-y-3 relative">
                   <Image src={headerImage} alt={"header image"}/>

                   <div className="absolute bottom-5 left-2 sm:bottom-5 sm:left-0">
                        <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
                            <p><span className="text-xl"> 📢 </span>Available for Work</p>
                        </MovingBorderBtn>
                    </div>  
                </div>
                
                <div className="glow absolute top-[30%] right-[30%]"></div>
                
                
            </div>
            
        </div>
    )
}