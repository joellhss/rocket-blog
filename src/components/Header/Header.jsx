import { ArrowRight } from "phosphor-react";
import { Image } from "./ImageHeader";
import { Nav } from "./Nav";

export function Header() {
    return(
        <div className="w-auto bg-purple-500 min-h-[587px] border-b-4 border-green-500">
            <Nav />

            <div className="flex gap-11 justify-evenly tablet:flex-wrap-reverse mb-6 items-center">
                <div className="flex flex-col gap-6 laptop:max-w-[700px] min-w-[400px] tablet:max-w-[365px] tablet:mx-2">
                    <strong className="text-purple-300 font-bold text-4xl leading-tight">
                        Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
                    </strong>
                    <p className="text-[18px] leading-5 text-purple-100">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac. 
                    </p>
                    <a className="flex gap-2 items-center font-bold text-purple-300 text-[18px] hover:text-purple-400 transition-colors" href="#">
                        Veja mais
                        <ArrowRight size={24} weight="bold" className="text-green-500"/>
                    </a>
                </div>
                
                <div className="min-w-[570px] tablet:min-w-[375px]">
                    <Image largura="570" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/> 
                </div>
            </div>

        </div>
    )
}