'use client'
import { Book, Link2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const Courses = ()=>{
    const [courses] = useState<{
        id:string,
        name:string,
        image:string
    }[]>([
        {
            "id": "c012",
            "name": "HTML & CSS: Interfaces Modernas",
            "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        },
        {
            "id": "c015",
            "name": "Inteligência Artificial Aplicada",
            "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        },
        {
            "id": "c016",
            "name": "Data Science com JavaScript",
            "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
        },
        ])
    return(
        <section
        className="sm:h-[80vh] flex flex-col items-center gap-2 justify-center" id="courses">
            <div
            className="p-2 sm:w-[920px]">
            <h1
            className="text-xl sm:text-3xl font-mono flex items-center gap-1">
                <Book/>
                Nossos Cursos </h1>
            </div>

            <div
            className="flex flex-wrap gap-2 items-center justify-center">
                {courses.map((e)=>(
                    <div key={e.id}
                    className="w-[300px] h-[300px] border-2 flex flex-col">
                        <div
                        className="overflow-hidden">
                        <Image
                        alt={e.name}
                        width={200}
                        src={e.image}
                        height={200}
                        className="w-full h-[200px]"/>
                        </div>
                        
                        <div 
                        className="grow flex flex-col p-2 gap-2 items-center justify-center">
                            <span>
                                {e.name}
                            </span>
                            <Link
                            href="/matricular"
                            className="text-blue-600 group flex gap-1 hover:text-white transition-all"
                            >matricular-se
                            <Link2
                            className="hidden group-hover:flex"
                            />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}