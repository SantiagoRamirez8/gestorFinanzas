const form = document.getElementById('transaction-form');
const totalExpenses = document.getElementById('total-gastos');
const totalPayments = document.getElementById('total-pagos');
const balance = document.getElementById('saldo');

// Variables para los totales
let expenses = 0;
let payments = 0;

// Función para actualizar los totales en la pantalla
function updateDisplay() {
    totalExpenses.textContent = `$${expenses}`;
    totalPayments.textContent = `$${payments}`;
    balance.textContent = `$${payments - expenses}`;
}

// Función que se ejecuta al enviar el formulario
function addTransaction(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener datos del formulario
    const type = document.getElementById('type').value;
    const amount = Number(document.getElementById('amount').value);

    // Sumar el monto a gastos o pagos según el tipo
    if (type === 'gasto') {
        expenses += amount;
    } else {
        payments += amount;
    }

    updateDisplay(); // Mostrar los totales actualizados
    form.reset(); // Limpiar el formulario
}

// Escuchar el envío del formulario
form.addEventListener('submit', addTransaction);

// Inicializar la pantalla con valores en cero
updateDisplay();