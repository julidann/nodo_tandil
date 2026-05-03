function abrirPago(e, plan, precio, linkMP) {
  e.preventDefault();

  document.getElementById("modalPlan").textContent = plan;
  document.getElementById("modalPrecio").textContent = precio;
  document.getElementById("mpLink").href = linkMP;

  const mensaje = `Hola, ya realicé la transferencia del plan ${plan} (${precio})`;
  document.getElementById("whatsappComprobante").href =
    "https://wa.me/5492494123456?text=" + encodeURIComponent(mensaje);

  document.getElementById("modalPago").classList.add("active");
}

function cerrarPago() {
  document.getElementById("modalPago").classList.remove("active");
}

function copiarAlias() {
  navigator.clipboard.writeText("nodo.entrenamiento");
  alert("Alias copiado");
}
