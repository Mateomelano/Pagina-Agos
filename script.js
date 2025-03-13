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
                "number": { "value": 50 },
                "shape": {
                    "type": "image",
                    "image": { "src": "heart.jpg", "width": 20, "height": 20 }
                },
                "move": { "speed": 15 }
            }
        });
    } else {
        console.error("particles.js no se ha cargado correctamente.");
    }
});
