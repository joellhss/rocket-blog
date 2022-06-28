import { Footer } from "../Footer/Footer";
import { BoxContent } from "./BoxContent";
import { ImageMain } from "./ImageMain";

export function MainContent() {
    return(
        <div className="flex flex-col items-center bg-purple-100 w-[100%] h-[100%] gap-16">
           
            <div className="flex pt-14 justify-center desktop:gap-32 tablet:flex-wrap tablet:gap-6">
                <a href="#" className="max-w-[569px] hover:bg-purple-200 rounded-xl hover:text-purple-700 transition-colors">
                    <BoxContent
                    image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    largura="569" 
                    data="Janeiro 04, 2022"
                    title="Começando no ReactJS em 2022"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
                    />
                </a>

                <div className="flex flex-col max-w-[472px]">
                    <a href="#" className="pb-6 border-b border-purple-200 mb-6 hover:bg-purple-200 rounded-xl hover:text-purple-700 transition-colors">
                        <BoxContent
                        image=""
                        largura=""
                        data="Janeiro 04, 2022"
                        title="Conheça as principais técnicas para conseguir uma vaga internacional em programação"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
                        />
                    </a>
                    <a href="#" className="pb-6 border-b border-purple-200 hover:bg-purple-200 rounded-xl hover:text-purple-700 transition-colors">
                        <BoxContent
                        image=""
                        largura=""
                        data="Janeiro 04, 2022"
                        title="Veja a evolução do Front-end na prática"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
                        />
                    </a>

                </div>
            </div>

            <div className="flex gap-8 flex-wrap justify-center">
                <a href="#" className="max-w-[370px] hover:bg-purple-200 rounded-xl hover:text-purple-700 transition-colors">
                    <BoxContent
                        image="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        largura="370px"
                        data="Janeiro 04, 2022"
                        title="10 dicas para conseguir a vaga desejada"
                        text=""
                    />
                </a>
                <a href="#" className="max-w-[370px] hover:bg-purple-200 rounded-xl hover:text-purple-700 transition-colors">
                    <BoxContent
                        image="https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        largura="370px"
                        data="Janeiro 04, 2022"
                        title="Deixe seu código mais semântico com essas dicas"
                        text=""
                    />
                </a>
                <a href="#" className="max-w-[370px] hover:bg-purple-200 rounded-xl hover:text-purple-700 transition-colors">
                    <BoxContent
                        image="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        largura="370px"
                        data="Janeiro 04, 2022"
                        title="Use essas dicas nas suas aplicações mobile"
                        text=""
                    />
                </a>
            </div>

            <a
            href="#"
            className="bg-purple-200 flex w-[62%] justify-center text-center rounded py-3 text-purple-700 hover:bg-purple-300 hover:text-purple-100 mb-10 transition-colors"
            >
                Ler outros artigos
            </a>

            <Footer />
        </div>
    )
}