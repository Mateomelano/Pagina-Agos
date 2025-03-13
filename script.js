const VOUCHER_CODE = "9/11/24"; // Código fijo del voucher


function validarVoucher() {
    const input = document.getElementById("voucherInput").value;
    if (input === VOUCHER_CODE) {
        alert("¡Voucher reclamado con éxito!");
    } else {
        alert("Código incorrecto, intenta nuevamente.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 100 },
                "shape": {
                    "type": "image",
                    "image": { "src": "heart.png", "width": 20, "height": 20 },
                },
                "size": { "value": 30, "random": true },
                "opacity": { "value": 0, "random": true },
                "move": {
                    "speed": 3,
                    "random": true,
                    "direction": "bottom",
                    "out_mode": "out",
                    "straight": false
                },
                "line_linked": { "enable": false } // Deshabilita las líneas entre partículas
            },
            "interactivity": {
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" }
                },
                "modes": {
                    "repulse": { "distance": 100, "duration": 0.4 }
                }
            }
        });
    } else {
        console.error("particles.js no se ha cargado correctamente.");
    }
});

