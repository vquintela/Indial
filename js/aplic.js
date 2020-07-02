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
        comercio internacional.<br><br>
        La característica  que quizás sea la más apreciable de  la fibra dietaria de citrus, es su capacidad de reemplazar parcialmente las grasas que intervienen en la formulación. <br>
        En una proporción de 1 parte de AION ®+ 5 partes de agua puede sustituir hasta el 50 % de las grasas totales de los productos horneados  con los importantes beneficios de:  <br> 
        • Reducción de costos al disminuir el porcentaje de  las grasas de la formulación y reemplazarlos en parte por agua.<br>
        • Reducción en el tiempo de horneado.<br>
        • Etiquetado “saludable”.  Característica que se puede resaltar en el etiquetado y la publicidad: “Reducido en Grasas” “Bajas Calorías” “Fuente de Fibras”, etc. 
        según los porcentajes y la reglamentación vigente. <br>
        Esta fibra natural se presenta como un polvo fácilmente incorporable en los procesos de amasado.<br>
        AION° se comporta ventajosamente como emulsionante con la mayoría de los ingredientes que se utilizan en “backery, aglutinando y mejorando la absorción de aire en el 
        batido de la masa. Al provenir de la fruta cítrica, que es rica en el contenido de pectinas, la fibra mantiene esa ventaja que le permite una buena gelificación y mejora 
        la administración del agua agregada (sinéresis) manteniendo por más tiempo la humedad del producto final. <br>
        La frescura de la miga y la elasticidad de las superficies externas de los panificados batidos son un objetivo de calidad muy apreciado por los consumidores.  
        Más aún cuando se trata de  productos que se venden congelados, ya que la fibra AION® contribuye sobremanera a mantener las moléculas de agua cuando se produce el descongelamiento.<br><br>
        Además, es muy importante señalar que la incorporación de la fibra al producto puede ser mencionada en la etiqueta favoreciendo la condición de producto natural, ya que la legislación 
        vigente permite declarar el contenido de fibra (según el porcentaje utilizado), o la sustitución parcial de grasas: “reducido en grasas”, cuando el producto final cumple determinadas exigencias.<br><br>
        AION® se presenta como polvo miscible en seco con los restantes ingredientes de la fórmula y tiene la propiedad de emulsionar y aglutinar ventajosamente en el proceso de amasado.<br>
        • Sustituye en parte los aportes funcionales de las grasas, mejorando la calidad nutricional del producto.<br>
        • Ayuda a bajar costos de formula por la sustitución de ingredientes más caros por agua.  <br>
        • Posibilita destacar en la etiqueta y publicidad la mejor calidad nutricional del alimento según las disposiciones legales vigentes.<br>
        Pero la mayor ventaja que brinda la utilización de la fibra de citrus AION®   en  los horneados batidos es el de absorber y mantener el agua agregada, 
        mejorando la frescura y humedad de la miga y  sostenerlas por más tiempo en la góndola.  <br>
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
        permite ser destacada en las etiquetas mostrando el aspecto saludable y natural del alfajor. <br><br>
        AION® tiene un efecto espesante que contribuye a la estabilidad de los rellenos, a la vez que mantiene los grados de viscosidad
         que se necesitan en los procesos continuos de dosificación.  Al ligar y estabilizar  firmemente la humedad, contribuye a lograr
         una mayor duración  del alfajor.  <br><br>
        AION ® se presenta como un polvo, prácticamente neutro al aroma y sabor, dosificable en seco con los restantes ingredientes en una proporción de 0.5 al 3% 
        Las materias primas - limones - y la elaboración son nacionales. Por lo  tanto,  no depende de las situaciones cambiantes del sector externo de la economía. <br><br>
        La fibra dietaría de citrus AION® es un ingrediente funcional que se aplica a diferentes productos. Con respecto a la industria alfajorera ofrece las siguientes 
        ventajas en los procesos de elaboración y la distribución.<br>
        • Permite la sustitución parcial de las grasas en la galleta. <br>
        • Actúa como espesante de calidad en los dulces y mermeladas de rellen.<br>
        • Mantiene más tiempo la humedad de tapas y rellenos.<br><br>
        En tanto,  su aplicación en Alfajores brinda  las siguientes ventajas económicas:<br>
        • Ayuda a bajar los costos al reemplazar grasas y otros ingredientes espesantes mediante la proporción de 1 parte de AION® + 5 partes de agua.<br>
        • Permite instalar a los alfajores en la extensa gama de los productos naturales, saludables y de menor contenido calórico, según la sustitución de 
        grasas y azúcares que se haya logrado aplicando AION®.<br>
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
        AION® coadyuva positivamente en la emulsión  y  reemplaza  parcialmente al huevo y  el  aceite.
        Esta funcionalidad permite una reducción del colesterol y las calorías del alimento.  Con ello se introducen dos aspectos que hoy  son muy
         tenidos en cuenta por los consumidores que buscan alimentos más sanos. Estas ventajas pueden ser destacadas en el etiquetado y la publicidad conforme a las normas legales vigentes.<br><br>
        La incorporación de la fibra AION® no altera el sabor y el aroma del producto, reduce los costos y mejora la textura y la viscosidad.<br><br>
        AION® aplicado en salsas y mayonesas:<br>
        • Mejora la emulsión y permite reemplazar parcialmente:<br>
        • Aceite (una parte de AION y hasta 5 partes de agua) = Menos calorías.<br>
        • Huevo (según formula de uso) = menos colesterol.<br><br>

        • Retiene el agua y estabiliza al producto aumentando su duración.<br>
        • Remplaza otros estabilizantes y espesantes químicos importados y, como tal, problemáticos.<br>
        • Baja los costos de fórmula. <br>
        • Al ser de origen natural esta cualidad se puede destacar en el etiquetado y la publicidad  de los alimentos que la utilizan en su formulación.
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