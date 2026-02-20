// assets/js/main.js

// --- LÓGICA DEL MENÚ ---
function toggleMenu(e) {
    if (e) e.stopPropagation();
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) dropdown.classList.toggle('show');
}

// Cerrar menú al tocar fuera
window.addEventListener('click', (e) => {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown && !e.target.matches('.dropbtn')) {
        dropdown.classList.remove('show');
    }
});

// --- SISTEMA DE ADMINISTRACIÓN CENTRALIZADO ---
const CLAVE_ADMIN = "ivancito";

function checkAdmin(callback) {
    const pass = prompt("Pass Admin:");
    if (pass === CLAVE_ADMIN) {
        callback();
    } else if (pass !== null) {
        alert("Contraseña incorrecta ❌");
    }
}

// --- FUNCIONES DE RESET ESPECÍFICAS ---

// Reset Total (Usado en Index)
function resetApp() {
    checkAdmin(() => {
        localStorage.clear();
        alert("Aplicación reseteada por completo ✨");
        location.reload();
    });
}

// Reset Preguntados (Daily Reset)
function resetDailyAdmin() {
    checkAdmin(() => {
        localStorage.removeItem('quizLastDate');
        localStorage.removeItem('quizState');
        alert("Intento diario de Preguntados desbloqueado 🔓");
        location.reload();
    });
}

// Reset Historial de Preguntas
function resetQuestionsAdmin() {
    checkAdmin(() => {
        localStorage.removeItem('quizCorrectasHistoricas');
        alert("Historial de preguntas limpiado 🧹");
        location.reload();
    });
}

// Recompensar Intento Extra (Preguntados)
function rewardAttemptAdmin() {
    checkAdmin(() => {
        localStorage.removeItem('quizState');
        localStorage.removeItem('quizDailySet');
        localStorage.removeItem('quizCurrentIndex');
        alert("¡Intento extra concedido! Suerte 🎁");
        location.reload();
    });
}

// Reset Memoria (Timer 72hs)
function resetTimerMemory() {
    checkAdmin(() => {
        localStorage.removeItem('lastGameWin');
        localStorage.removeItem('memoryInProgress');
        alert("Desafío de Memoria desbloqueado 🔓");
        location.reload();
    });
}

// Reset Snoopy Jump (Cooldown)
function resetCooldownJump() {
    checkAdmin(() => {
        localStorage.removeItem('jumpWinTime');
        localStorage.setItem('jumpCodesWonCount', 0);
        alert("Snoopy Jump reseteado 🔓");
        location.reload();
    });
}

// Reset DJ Snoopy
function resetDjAdmin() {
    checkAdmin(() => {
        localStorage.removeItem('djDiscoveryDate');
        localStorage.removeItem('djForceUnlock');
        alert("DJ Snoopy reseteado 🧹");
        location.reload();
    });
}

// Desbloquear todas las canciones (DJ)
function forceUnlockDJ() {
    checkAdmin(() => {
        localStorage.setItem('djForceUnlock', 'true');
        alert("Todas las canciones desbloqueadas 🔓");
        location.reload();
    });
}