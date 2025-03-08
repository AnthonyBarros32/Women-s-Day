// Generar estrellas como iconos en el fondo
const numberOfStars = 30;  // Número de estrellas a mostrar
const starsContainer = document.body;  // Contenedor donde se colocarán las estrellas

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('i');  // Crear un elemento de icono
    star.classList.add('fas', 'fa-star', 'star');  // Agregar clases de FontAwesome
    const size = Math.random() * 30 + 10; // Tamaño aleatorio de la estrella
    const xPosition = Math.random() * 100 + '%'; // Posición horizontal aleatoria
    const yPosition = Math.random() * 100 + '%'; // Posición vertical aleatoria
    const animationDuration = Math.random() * 5 + 5 + 's'; // Duración aleatoria para el movimiento

    // Aplicar estilos de tamaño y posición aleatoria
    star.style.fontSize = size + 'px';
    star.style.left = xPosition;
    star.style.top = yPosition;
    star.style.animationDuration = animationDuration;

    starsContainer.appendChild(star);  // Añadir la estrella al contenedor
}
const messages = [
    "¡Hola! Este es un pequeño detalle para ti. Haz clic para ver más...",
    "¿Sabías que me gusta mucho hablar contigo?",
    "Cada conversación contigo me hace sonreír 😊",
    "Me encanta cómo haces que cada día sea especial",
    "Este es solo un pequeño gesto, pero mi aprecio por ti es enorme.",
    "Espero que te esté gustando este detalle 😊",
    "Gracias por ser una persona increíble. 💫",
    "Feliz Día de la Mujer, la persona increíble que eres, con tanta fuerza, belleza y ternura. ¡Te admiro muchísimo!",
    "No hay palabras suficientes para describir lo que significas para mí. Eres una mujer excepcional y una mamá aún más increíble.",
    "Cada día me demuestras lo valiosa que eres. ¡Qué afortunado me siento de poder ver todo lo que logras! 💪",
    "Hoy celebramos a todas las mujeres, pero especialmente a ti, que iluminas mi vida con tu amor y dedicación.",
    "Tu esfuerzo no pasa desapercibido. Estoy seguro de que lo que estás construyendo hoy será algo increíble mañana.",
    "Cada día que paso conociéndote me doy cuenta de lo afortunado que soy de tenerte en mi vida.",
    "Sé que lo que más deseas es ser feliz, y sinceramente deseo que todos tus sueños se hagan realidad porque te lo mereces."
];

let currentMessage = 0; // Contador de los mensajes

const messageContainer = document.getElementById("message");

// Función para mostrar los mensajes y contar hasta el final
document.body.addEventListener("click", () => {
    currentMessage++;
    
    if (currentMessage < messages.length) {
        messageContainer.style.opacity = 0; // Desvanecer el mensaje actual

        setTimeout(() => {
            messageContainer.innerHTML = messages[currentMessage]; // Cambiar el mensaje
            messageContainer.style.opacity = 1; // Desvanecer hacia el siguiente
        }, 500); // Espera a que el mensaje actual se desvanezca antes de mostrar el siguiente
    } else {
        // Si se han mostrado todos los mensajes, mostrar el mensaje final de dedicatoria
        messageContainer.style.opacity = 0;
        setTimeout(() => {
            messageContainer.innerHTML = "Feliz Día de la Mujer. Eres más que admirable, eres una inspiración. Gracias por ser tan increíble, por tu fuerza y dedicación. Estoy tan orgulloso de ti, por todo lo que haces y por la maravillosa mamá que eres. ¡Te admiro y quiero muchísimo Laura de mi CORAZÓN! 💖🌸✨";
            messageContainer.style.opacity = 1;
        }, 500);
    }
});
