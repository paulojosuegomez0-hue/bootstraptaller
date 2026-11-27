
const btnDisponible = document.getElementById('btn-disponible');
const btnPausa = document.getElementById('btn-pausa');
const btnOcupado = document.getElementById('btn-ocupado');
const tableroEstado = document.getElementById('tablero-estado');

btnDisponible.addEventListener('click', function () {
    tableroEstado.textContent = 'Estado actual: Disponible';
});

btnPausa.addEventListener('click', function () {
    tableroEstado.textContent = 'Estado actual: En pausa';
});

btnOcupado.addEventListener('click', function () {
    tableroEstado.textContent = 'Estado actual: Ocupado';
});


const btnDelantero = document.getElementById('btn-delantero');
const btnMediocampo = document.getElementById('btn-mediocampo');
const btnPortero = document.getElementById('btn-portero');
const btnLimpiarVisor = document.getElementById('btn-limpiar-visor');
const visorTarjetas = document.getElementById('visor-tarjetas');

btnDelantero.addEventListener('click', function () {
    visorTarjetas.innerHTML = `
        <span class="badge bg-success mb-2">Ataque</span>
        <h5 class="fw-bold text-info">Erling Haaland — Dorsal #9</h5>
        <p class="mb-0 text-light">Delantero centro rápido en el área, especialista en definición al primer toque y desmarques.</p>
    `;
});

btnMediocampo.addEventListener('click', function () {
    visorTarjetas.innerHTML = `
        <span class="badge bg-primary mb-2">Mediocampo</span>
        <h5 class="fw-bold text-warning">Nico Paz — Dorsal #10</h5>
        <p class="mb-0 text-light">Volante creativo encargado de conectar la defensa con el ataque mediante pases filtrados y balón parado.</p>
    `;
});

btnPortero.addEventListener('click', function () {
    visorTarjetas.innerHTML = `
        <span class="badge bg-warning text-dark mb-2">Defensa / Arco</span>
        <h5 class="fw-bold text-success">Thibaut Courtois — Dorsal #1</h5>
        <p class="mb-0 text-light">Guardameta con grandes reflejos bajo los tres palos, seguro en salidas aéreas y ordenando la línea defensiva.</p>
    `;
});

btnLimpiarVisor.addEventListener('click', function () {
    visorTarjetas.innerHTML = '';
});