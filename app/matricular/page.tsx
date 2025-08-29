'use client'

import { IdCard,Smartphone, Upload, User } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRef } from "react"

export default function EnrollPage(){
    const upRef = useRef< HTMLInputElement |null>(null)
    return(
        <section>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-xl sm:text-3xl font-sans">
                    Formulario de matricula
                </h1>

                <form action="" method="post" className="flex flex-col gap-2">

                    <div className="rounded border-2 border-gray-300 w-[400px] flex gap-1 p-2 h-[50px] items-center">
                        <User color="gray"/>
                        <input type="text" name="name" placeholder="Digite seu nome..." className="grow outline-none font-sans"  />
                    </div>

                    <div className="rounded border-2 border-gray-300 w-[400px] flex gap-1 p-2 h-[50px] items-center">
                        <Smartphone color="gray"/>
                        <input type="text" name="number" placeholder="Digite seu numero de telefone..." className="grow outline-none font-sans "  />
                    </div>

                    <div className="rounded border-2 border-gray-300 w-[400px] flex gap-1 p-2 h-[50px] items-center">
                        <IdCard color="gray"/>
                        <input type="text" name="bi" placeholder="Digite o numero do Bi..." className="grow outline-none font-sans "  />
                    </div>

                    <div>
                        <Select name="">
                          <SelectTrigger className="w-[400px]">
                            <SelectValue placeholder="Selecione o curso" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="programação">Programação</SelectItem>
                            <SelectItem value="culinaria">culinaria</SelectItem>
                            <SelectItem value="desenho">desenho</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>

                    <div
                    onClick={()=>{
                        upRef.current?.click()
                    }}
                    className="border-2 border-dashed p-2 cursor-pointer flex gap-2 w-[400px] h-[100px] items-center justify-center">
                        <input type="file" ref={upRef} hidden name="comprovativo"/>
                        <Upload />
                        <span
                        className="font-sans text-sm">Upload Comprovativo</span>
                    </div>

                    <button type="submit" className="font-medium font-sans bg-blue-400 p-2 text-white cursor-pointer rounded">
                        matricular-se
                    </button>
                </form>
            </div>
        </section>
    )
}