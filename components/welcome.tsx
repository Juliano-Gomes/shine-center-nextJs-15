import Image from "next/image"

export const WelcomeMessage=()=>{
    return(
        <section
        className="sm:h-[95vh] flex flex-col items-center gap-2 justify-center">
                <div 
                className="flex flex-col gap-2 items-start">
                    <h1
                    className="text-xl font-sans sm:text-4xl p-2 ">
                        Centro de formação profissional <span 
                        className="font-mono text-blue-500 font-medium">Miraprende</span>
                    </h1>

                    <span className="font-mono p-2 sm:w-[650px]">
                        Somos um centro de formação capacitado com profissionais capazes de transimir conhecimento através do ato de ensino 
                    </span>
                </div>
                <div 
                className="p-2 flex items-center justify-start">
                    <Image
                    alt="image"
                    width={200}
                    height={200}
                    src="/image.png"
                    className="sm:w-[600]"
                    />
                </div>
        </section>
    )
}