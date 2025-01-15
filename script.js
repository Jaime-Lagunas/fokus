const html = document.querySelector('html')
const botonCorto = document.querySelector('.app__card-button--corto')
const botonEnfoque = document.querySelector ('.app__card-button--enfoque')
const botonLargo = document.querySelector ('.app__card-button--largo')
const banner = document.querySelector('.app__image')

botonCorto.addEventListener ('click', () => {
    cambiarContecto('descanso-corto')
    
})

botonEnfoque.addEventListener('click', () => {
    cambiarContecto('enfoque')
})

botonLargo.addEventListener('click', () => {
    cambiarContecto('descanso-largo')
    
})



function cambiarContecto(contexto){
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src',`/imagenes/${contexto}.png`)

    switch (contexto) {
        case "enfoque":
            titulo.innerHTML=`
             Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `
        
            break;
        case "descanso-corto":
            titulo.innerHTML=`
            ¿Qué tal tomar un respiro? <br>
                <strong class="app__title-strong">¡Haz una pausa corta!</strong>
            `
            break
        case "descanso-largo":
            titulo.innerHTML = `
            Hora de volver a la superficie <br>
                <strong class="app__title-strong">Haz una pausa larga.</strong>
            
            `        
    
        default:
            break;
    }
}

