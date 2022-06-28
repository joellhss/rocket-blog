import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { TheBlogLogo } from "../Header/TheBlogLogo";

export function Footer() {
    return(
        <div className="flex justify-evenly items-center bg-purple-700 w-[100%] border-t-4 border-green-500 py-6 flex-wrap gap-5">
            <TheBlogLogo />
            <div className="flex justify-evenly gap-12 w-[70%] flex-wrap">
                <div className="flex flex-col items-center">
                    <p className="text-purple-100">© Todos os direitos reservados. - 2022</p>
                    <p className="text-purple-100">Página desenvolvida por Joel Sousa.</p>
                </div>
                <div className="flex gap-6 justify-center">
                    <a href="">
                        <GithubLogo size={32} weight="fill" className="text-purple-100 hover:text-green-500 transition-colors"/>
                    </a>
                    <a href="">
                        <LinkedinLogo size={32} weight="fill" className="text-purple-100 hover:text-green-500 transition-colors"/>
                    </a>
                    <a href="">
                        <InstagramLogo size={32} weight="fill" className="text-purple-100 hover:text-green-500 transition-colors"/>
                    </a>
                </div>
            </div>
        </div>
    )
}