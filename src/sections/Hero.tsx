import Button from "@/components/Button"
import Image from "next/image"
import designExample1Image from "@/assets/images/design-example-1.png"
import designExample2Image from "@/assets/images/design-example-2.png"
import Pointer from "@/components/Pointer"


export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
        <div className="container relative">
            <div className="absolute -left-32 top-16 hidden lg:block">
                <Image 
                src={designExample1Image}
                alt="Design example 1 image" 
                />
            </div>
            <div className="absolute -right-64 -top-16 hidden lg:block">
                <Image 
                src={designExample2Image} 
                alt="Design example 2 image"
                />
            </div>
            <div className="absolute left-56 top-96 hidden lg:block">
                <div>
                <Pointer name="Andrea"/>
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                <Pointer name="Bryan" color="red"/>
                </div>
            </div>
            <div className="flex justify-center">
                 <div className="inline-flex 
                                 py-1 px-3 
                                 bg-gradient-to-r from-purple-400 to-pink-400
                                 rounded-full
                                 text-neutral-950 
                                 font-semibold">
                                ✨ 7.5 Million Seed Round Raised</div>
                  </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Impactful Design Created Efforlessly</h1>
        <p className="text-center text-xl text-white/50 mt-8">Design Tools Shouldn't slow you down. Layers Combines Powerful features with an intuitive interface
            that keep you in creative flow. </p>
            <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                <input type="email" placeholder="Enter your email"
                className="bg-transparent px-2 md:flex-1 w-full"/>
                <Button type="submit" 
                variant="primary"
                className="whitespace-nowrap"
                size="sm"
                >Sign Up</Button>
            </form>
        </div>
    </section>
    
        )
}
