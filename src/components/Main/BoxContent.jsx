import { ImageMain } from "./ImageMain";

export function BoxContent({image, largura, data, title, text}) {
    
    return(
        <div className="flex flex-col gap-4">
            {image != "" ? <ImageMain src={image} largura={largura}/> : ""}
            <p>{data}</p>
            <strong className="text-2xl text-purple-500">{title}</strong>
            <p>
                {text != "" ? text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "}
            </p>
        </div>
    )
}