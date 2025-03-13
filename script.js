const VOUCHER_CODE = "9/11/24"; // Código fijo del voucher

function validarVoucher() {
  const input = document.getElementById("voucherInput").value;
  if (input === VOUCHER_CODE) {
    Swal.fire({
      title: "🎉 ¡Felicidades! 🎉",
      text: "Has reclamado tu voucher con éxito, aunque el mismo esta en vigencia desde el  9/11/24. 💖",
      icon: "success",
      confirmButtonText: "Aceptar",
      background: "#ffe6f2",
      color: "#d63384",
      confirmButtonColor: "#ff69b4",
      backdrop: `
                rgba(255, 182, 193, 0.4)

                left top
                no-repeat
            `,
    });
  } else {
    Swal.fire({
      title: "💔 ¡Oops! 💔",
      text: "Código incorrecto, intenta nuevamente.",
      icon: "error",
      confirmButtonText: "Reintentar",
      background: "#fff0f5",
      color: "#ff1493",
      confirmButtonColor: "#ff69b4",
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 100 },
        shape: {
          type: "image",
          image: { src: "/img/corazon.png", width: 20, height: 20 },
        },
        size: { value: 30, random: true },
        opacity: { value: 0, random: true },
        move: {
          speed: 3,
          random: true,
          direction: "bottom",
          out_mode: "out",
          straight: false,
        },
        line_linked: { enable: false }, // Deshabilita las líneas entre partículas
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
        },
      },
    });
  } else {
    console.error("particles.js no se ha cargado correctamente.");
  }
});
