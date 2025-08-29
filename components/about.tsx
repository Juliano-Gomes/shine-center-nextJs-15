import { LocationEdit, Smartphone } from "lucide-react"

export const About = ()=>{
    return(
        <section className="flex flex-col p-2">
            <div id="about" className="p-2 sm:h-[200px] flex gap-2 flex-col items-start">
                <h1
                className="text-xl sm:text-3xl">Sobre Nos</h1>

                <div>
                    <span className="font-mono sm:w-[650px]">
                        Somos um centro de formação capacitado com profissionais capazes de transimir conhecimento através do ato de ensino 
                    </span>
                </div>
            </div>
            <div id="contacts" className="flex flex-col gap-2 p-2">
                <h1
                className="text-xl sm:text-3xl">Imformaçães</h1>

                <div 
                className="grid grid-cols-1 sm:grid-cols-3 p-2 items-center justify-center ">
                     <div className="flex flex-col gap-2 sm:w-auto w-full  items-center sm:items-start">
                        <h1 className="flex items-center gap-1 text-xl">
                            <Smartphone/>
                            Contactos</h1>
                        <ul className="flex flex-col gap-2 text-gray-400 hover:text-gray-300">
                            <li>935481312</li>
                            <li>933569270</li>
                            <li>234520566</li>
                        </ul>
                     </div>

                     <div className="flex flex-col gap-2 sm:w-auto w-full  items-center sm:items-start">
                       <h1 className="flex gap-2 items-center text-xl">
                        <LocationEdit/>
                        Location</h1>

                        <ul className="flex flex-col gap-2 text-gray-400 hover:text-gray-300 ">
                            <li>
                                Escola 18A
                            </li>
                            <li>
                                Rua dos Voluntarios
                            </li>
                            <li>
                                Entrada do Mercado do 4
                            </li>
                        </ul>
                     </div>

                     <div className="flex flex-col gap-2 sm:w-auto w-full  items-center sm:items-start">
                        <h1 className="text-xl font-mono ">Inicio</h1>

                        <ul className="flex flex-col gap-2 text-gray-400 hover:text-gray-300">
                            <li>13 de Setembro</li>
                            <li>
                                9 Edição de cursos Intensivos
                            </li>
                        </ul>
                     </div>
                </div>              
            </div>
        </section>
    )
}