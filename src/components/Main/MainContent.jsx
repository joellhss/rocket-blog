import { Footer } from "../Footer/Footer";
import { BoxContent } from "./BoxContent";
import { ImageMain } from "./ImageMain";

export function MainContent() {
    return(
        <div className="flex flex-col items-center bg-purple-100 w-[100%] h-[100%] gap-16">
           
            <div className="flex pt-14 justify-center desktop:gap-32 tablet:flex-wrap tablet:gap-6">
                <div className="max-w-[569px]">
                    <BoxContent
                    image="src/assets/main.jpg"
                    largura="569" 
                    data="Janeiro 04, 2022"
                    title="Começando no ReactJS em 2022"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
                    />
                </div>

                <div className="flex flex-col max-w-[472px]">
                    <div className="pb-6 border-b border-purple-200 mb-6">
                        <BoxContent
                        image=""
                        largura=""
                        data="Janeiro 04, 2022"
                        title="Conheça as principais técnicas para conseguir uma vaga internacional em programação"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
                        />
                    </div>
                    <div className="pb-6 border-b border-purple-200">
                        <BoxContent
                        image=""
                        largura=""
                        data="Janeiro 04, 2022"
                        title="Veja a evolução do Front-end na prática"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
                        />
                    </div>

                </div>
            </div>

            <div className="flex gap-8 flex-wrap justify-center">
                <div className="max-w-[370px]">
                    <BoxContent
                        image="src/assets/content-box1.jpg"
                        largura="370px"
                        data="Janeiro 04, 2022"
                        title="10 dicas para conseguir a vaga desejada"
                        text=""
                    />
                </div>
                <div className="max-w-[370px]">
                    <BoxContent
                        image="src/assets/content-box2.jpg"
                        largura="370px"
                        data="Janeiro 04, 2022"
                        title="Deixe seu código mais semântico com essas dicas"
                        text=""
                    />
                </div>
                <div className="max-w-[370px]">
                    <BoxContent
                        image="src/assets/content-box3.jpg"
                        largura="370px"
                        data="Janeiro 04, 2022"
                        title="Use essas dicas nas suas aplicações mobile"
                        text=""
                    />
                </div>
            </div>

            <a
            href="#"
            className="bg-purple-200 flex w-[62%] justify-center text-center rounded py-3 text-purple-500 hover:bg-purple-300 mb-10"
            >
                Ler outros artigos
            </a>

            <Footer />
        </div>
    )
}