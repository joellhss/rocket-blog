export function Image({src, largura}) {
  let larguraNumber = parseInt(largura)   
    return(
        <div className="flex">
            <div className={`flex rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 mix-blend-lighten drop-shadow-xl`}>
                <div className={`flex bg-gray-900 mix-blend-screen rounded-xl`}> 
                        
                        <img src={src} alt="" width={largura}/>
                        
                    </div>
                </div>
            </div>
    )
} 