import Link from "next/link";
import Image from "next/image";

export default function Hero(){
    return (
        <div className="min-h-[60vh] flex gap-10 flex-col-reverse lg:flex-row lg:gap-0 items-center justify-between">
            <div className="space-y-10">
                <h1 className="text-4xl lg:text-7xl font-bold">Hello World! 🙋🏻‍♂️ <br/> I'm Simernjeet Singh.</h1>
                <p className="md:w-96 text-lg text-gray-300  ">
                    Based in Deutschland, I'm a Fullstack developer with 3+ years of experience in Angular, TypeScript, PHP. 
                    I believe in creating User friendly and easy to understand web Applications.
                </p>
                <Link href={"mailto:singh.hessen@gmail.com"} className="inline-block hover:scale-125 hover:text-green-500 transition-all">
                    <div>
                        <h1 className="text-3xl font-bold">Contact me 📫</h1>
                    </div>
                </Link>
            </div>
            <div>
                <div className="w-125 h-125 space-y-3">
                   <Image 
                   src={"./header_image.svg"} alt={"header image"} width={400} height={300}/>
                </div>
            </div>
        </div>
    )
}