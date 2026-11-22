export function obtenerTimestamp() {
    const ahora = new Date();

    // Configuramos el formato en hora local de 24 horas
    const formateador = new Intl.DateTimeFormat('es', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    // Convertimos las partes en un objeto plano para acceder a ellas fácilmente
    const partes = Object.fromEntries(
        formateador.formatToParts(ahora).map(p => [p.type, p.value])
    );

    return `${partes.year}${partes.month}${partes.day}-${partes.hour}${partes.minute}${partes.second}`;
    // Armamos el timestamp limpio para archivos (ej: 20261021-102500)
    //const timestamp = `${partes.year}${partes.month}${partes.day}-${partes.hour}${partes.minute}${partes.second}`;
}