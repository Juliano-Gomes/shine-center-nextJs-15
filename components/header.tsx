import { Menu } from "lucide-react"
import Link from "next/link"

export const Header = ()=>{
    return(
        <header
        className="flex p-2 gap-2 sm:items-center">
            <nav
            className="sm:min-w-[450px] sm:px-7 ">
                <span
                className="text-xl cursor-pointer sm:text-2xl font-medium font-sans">
                    <Link href="/">
                        miraprende
                    </Link>
                    </span>
            </nav>
            <nav
            className="sm:flex gap-2 grow  p-2 items-center justify-around hidden">
                <ul
                className="flex gap-2 items-center justify-between sm:w-[350px]">
                    <li
                    className="hover:border-2 transition-all p-2 rounded">
                        <Link
                        href="/">Home</Link>
                    </li>
                    <li
                    className="hover:border-2 transition-all p-2 rounded">
                        <Link
                        href="#courses">cursos</Link>
                    </li>
                    <li
                    className="hover:border-2 transition-all p-2 rounded">
                        <Link
                        href="#about">sobre nos</Link>
                    </li>
                    <li
                    className="hover:border-2 transition-all p-2 rounded">
                        <Link
                        href="#contacts">contactos</Link>
                    </li>
                </ul>

                <div
                className="border-2 flex items-center p-2 justify-center rounded h-[45px] transition-all w-[150px] group hover:border-blue-500">
                    <Link href="/matricular"
                    className="font-mono group-hover:text-blue-500 transition-all">
                        Matricular-se
                    </Link>
                </div>
            </nav>
            <div
            className="flex sm:hidden group">
                <Menu className="group-hover:text-gray-300 text-gray-400 cursor-pointer" size={30} />
            </div>
        </header>
    )
}