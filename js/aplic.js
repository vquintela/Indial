const inicialar = () => {
    document.getElementById('panificados').addEventListener('click', () => panificados())
    document.getElementById('alfajores').addEventListener('click', () => alfajores())
    document.getElementById('salsas').addEventListener('click', () => salsas())
}

const panificados = () => {
    const texto = `
    <p>
        AION® es un ingrediente natural capaz de solucionar algunos de los problemas de la 
        fabricación de panificados horneados que se comporta como:<br><br>
        • Emulsionante<br>  
        • Espesante<br>
        • Aglutinante<br><br>
        Se trata de una fibra dietaría extraída del albedo y flavedo de los cítricos (especialmente el limón) mediante un
         proceso mecánico que le permite conservar sus componentes y, a la vez, mejorar la presentación de los productos 
         panificados que la incorporan mediante la posibilidad de destacarlos en su etiqueta y publicidad como productos 
         saludables por el contenido de fibra que aportan a la dieta diaria. <br><br>
        AION® tiene la capacidad de absorber el agua agregada en  la formulación, retenerla  durante la  cocción y mantenerla 
        por más tiempo,  alargando la vida en góndola  del producto terminado y prolongando así su frescura original y calidad.<br><br>     
        Otra característica  que podemos señalar es la de ser un producto argentino, obtenido de frutos que se producen con 
        ventajas importantes en el norte de nuestro país, por lo que no está condicionado a los avatares de la economía y el 
        comercio internacional.
    </p>
    `
    modalEd(texto)
}

const alfajores = () => {
    const texto = `
    <p>
        AION ® es un ingrediente natural que emulsiona con los restantes ingredientes de las tapas de alfajor. 
        Mejora la aglutinación de la masa a la vez que le confiere una mayor elasticidad y mejor textura después de la cocción 
        disminuyendo  las  roturas que suelen producirse  en los circuitos de producción de la industria  alfajorera.<br><br>
        Otra ventaja apreciable es la posibilidad de sustituir parcialmente las grasas incorporadas al amasado.  La proporción 
        de reemplazo alcanza hasta  1 parte de fibra + 5 partes de agua.  Esta cualidad,  aparte de la disminución en los  costos, 
        permite ser destacada en las etiquetas mostrando el aspecto saludable y natural del alfajor.  
    </p>
    `
    modalEd(texto)
}

const salsas = () => {
    const texto = `
    <p>
        AION® es una fibra natural que: <br><br>
        • Actúa  como un excelente factor emulsionante en la fase oleosa del proceso de salsas y aderezos.<br>
        • Mejora la consistencia y la viscosidad  gracias a su natural contenido de pectina y  la excelente acción 
        espesante que ésta aporta en la formulación.<br>  
        • Se comporta como un buen estabilizante por el efecto de retención del agua agregada,  permitiendo estabilizar  
        el volumen y la textura de las salsas.
    </p>
    `
    modalEd(texto)
}

const modalEd = (text) => {
    let mascara = document.getElementById('lamascara');
    document.getElementById('modal-texto').innerHTML = text
    mascara.style.display = "block";
    document.querySelector("#cerrarModal").addEventListener('click', () => {
        mascara.style.display = "none";
    });
}

inicialar()