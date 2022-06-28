import { MagnifyingGlass } from "phosphor-react";
import { TheBlogLogo } from "./TheBlogLogo";


export function Nav() {
    return (
   
            <nav className="flex py-16 justify-around tablet:flex-wrap tablet:gap-11 desktop:flex-nowrap">
                <a href="#">
                    <TheBlogLogo />
                </a>

                <ul className="flex gap-8 tablet:gap-6 text-purple-100">
                    <li><a href="#" className="border-l-2 border-green-500 pl-1 hover:text-green-500 transition-colors text-[18px]">Home</a></li>
                    <li><a href="#" className="hover:text-green-500 transition-colors text-[18px]">Sobre</a></li>
                    <li><a href="#" className="hover:text-green-500 transition-colors text-[18px]">Categorias</a></li>
                    <li><a href="#" className="hover:text-green-500 transition-colors text-[18px]">Contato</a></li>
                </ul>

                <div className="flex">
                    <input
                    type="text"
                    placeholder="Buscar"
                    className="bg-purple-700 py-3 pl-6 text-purple-100 rounded-l-lg outline-none tablet:max-w-[250px] laptop:max-w-none"
                    />
                    <a href="" className="bg-purple-300 py-2 px-5 rounded-r-lg hover:bg-purple-400 text-purple-100 transition-colors">
                    <MagnifyingGlass size={32} weight="light"/>
                    </a>
                </div>

            </nav>
    )
}