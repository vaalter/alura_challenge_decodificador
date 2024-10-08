/* ===== Loader =====*/
window.addEventListener("load", () => {
  const contenedorLoader = document.querySelector(".container--loader");
  contenedorLoader.style.opacity = 0;
  contenedorLoader.style.visibility = "hidden";
});

function focus() {
  let input = document.getElementById("input-texto");
  input.focus();
}

function value() {
  let input = document.getElementById("input-texto");
  input.value = "";
}

function encriptar() {
  let texto = document.getElementById("input-texto").value;
  let txt_cifrado = texto.replace(/e/gm, "enter");
  txt_cifrado = txt_cifrado.replace(/o/gm, "ober");
  txt_cifrado = txt_cifrado.replace(/i/gm, "imes");
  txt_cifrado = txt_cifrado.replace(/a/gm, "ai");
  txt_cifrado = txt_cifrado.replace(/u/gm, "ufat");

  if (/[^a-zñ ]/.test(texto)) {
    Swal.fire({
      icon: "error",
      iconColor: "#b9ab9c",
      background: "#E3E0DE",
      title: "Oops...",
      confirmButtonColor: "#b9ab9c",
      text: "São aceitos apenas letras minúsculas e sem acento",
    });
  } else if (texto.length === 0) {
    Swal.fire({
      icon: "error",
      iconColor: "#b9ab9c",
      background: "#E3E0DE",
      title: "Oops...",
      confirmButtonColor: "#b9ab9c",
      text: "O campo de texto está vazio, digite algo...",
    });
  } else {
    document.getElementById("texto1-contder").style.display = "none";
    document.getElementById("texto2-contder").style.display = "none";
    document.getElementById("output-texto").style.display = "inline-block";
    document.getElementById("output-texto").innerHTML = txt_cifrado;

    value();
  }
}

function desencriptar() {
  let texto = document.getElementById("input-texto").value;
  let txt_cifrado = texto.replace(/enter/gm, "e");
  txt_cifrado = txt_cifrado.replace(/ober/gm, "o");
  txt_cifrado = txt_cifrado.replace(/imes/gm, "i");
  txt_cifrado = txt_cifrado.replace(/ai/gm, "a");
  txt_cifrado = txt_cifrado.replace(/ufat/gm, "u");

  if (texto.length === 0) {
    Swal.fire({
      icon: "error",
      iconColor: "#b9ab9c",
      background: "#E3E0DE",
      title: "Oops...",
      confirmButtonColor: "#b9ab9c",
      text: "O campo de texto está vazio. Digite algo para descriptografar...",
    });
  } else {
    document.getElementById("texto1-contder").style.display = "none";
    document.getElementById("texto2-contder").style.display = "none";
    document.getElementById("output-texto").style.display = "inline-block";
    document.getElementById("output-texto").innerHTML = txt_cifrado;

    value();
  }
}

function copiar() {
  let conteudo = document.querySelector("#output-texto");
  conteudo.select();
  document.execCommand("copy");
  Swal.fire({
    icon: "success",
    iconColor: "#b9ab9c",
    background: "#E3E0DE",
    title: "Legal!",
    confirmButtonColor: "#b9ab9c",
    text: "Texto copiado corretamente",
  });
}

focus();
value();
