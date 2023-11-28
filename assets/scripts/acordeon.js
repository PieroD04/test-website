const contenidoAcordeon = document.querySelectorAll(".acordeon-contenido");

contenidoAcordeon.forEach( (item, index) => {
    let titulo = item.querySelector(".acordeon-titulo");
    titulo.addEventListener("click", () => {
        item.classList.toggle("open");
        let descripciones = item.querySelectorAll(".acordeon-descripcion");
        descripciones.forEach(descripcion => {
            if (item.classList.contains("open")) {
                descripcion.style.display = 'block';
                descripcion.style.height = `${descripcion.scrollHeight}px`;
            } else {
                descripcion.style.height = '0px';
                descripcion.style.display = 'none';
            }
        })
        
        let estados = item.querySelectorAll(".acordeon-estado");
        estados.forEach(estado => {
            if (item.classList.contains("open")) {
                estado.textContent = '-';
            } else {
                estado.textContent = '+';
            }
        })
    })
})