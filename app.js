const notificacionesBoton= document.getElementById("notificacionesBoton");
const metasCumplidasBoton= document.getElementById("metasCumplidasBoton");

const notificaciones=()=>{
    Swal.fire({
        title: '¡Te estás alejando de tus metas de ahorro',
        imageUrl: 'anxiety.svg',
        imageHeight: 300,
        imageAlt: 'anxiety',
        text: 'Da click en el foco para ajustar tu presupuesto',
        imageUrl: 'idea.svg',
        imageHeight: 200,
        imageAlt: 'bulb',
        background: '#ff0000',
      })
}

const metasCumplidas= () => {
    Swal.fire({
        title: '¡Hasta ahora has logrado ahorrar $356.50 pesos',
        imageUrl: 'confetti.png',
        imageHeight: 300,
        imageAlt: 'confetti',
      })
}



notificacionesBoton.addEventListener("click", notificaciones)
metasCumplidasBoton.addEventListener("click", metasCumplidas)
