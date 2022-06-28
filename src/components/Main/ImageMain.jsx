export function ImageMain({src, largura}) {
    let larguraNumber = parseInt(largura)   
      return(
          <div className="flex rounded-t-lg drop-shadow-sm">
              <div className={`flex rounded-t-xl bg-gradient-to-r from-purple-800 via-purple-300 to-purple-700 mix-blend-multiply`}>
                  <div className={`flex bg-gray-500 mix-blend-screen rounded-t-xl`}> 
                          
                          <img src={src} alt="" width={largura} className="mix-blend-hard-light rounded-t-xl"/>
                          
                      </div>
                  </div>
              </div>
      )
  } 