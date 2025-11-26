const modal = new bootstrap.Modal(document.getElementById('resultadoModal'));
const mensajeModal = document.getElementById('mensajeModal');
function mostrarModal(mensaje) {
    mensajeModal.innerHTML = mensaje;
    modal.show();
}
function calcularSueldo(event){
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const sueldo = parseFloat(document.getElementById('sueldoB').value);
    const horasT = parseFloat(document.getElementById('horasT').value);
    const horasExt = parseFloat(document.getElementById('horasExt').value);
    const pagoExt = parseFloat(document.getElementById('pagoExt').value);
    let sueldoTotal;

    if(horasExt>0){
        sueldoTotal=(sueldo*horasT)+(horasExt*pagoExt);
    }else{
        sueldoTotal=sueldo*horasT;
    }

    mostrarModal("Hola, "+nombre+". Tu sueldo es: "+sueldoTotal);
}