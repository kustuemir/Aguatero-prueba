AGUATERO - PRUEBA DE CAMPO / CORRECCIONES

Cambios aplicados en esta versión:

1. REINICIO DEL REPARTO
- Se eliminó el reinicio automático por cambio de fecha.
- Los contadores, visitas y estado del reparto permanecen guardados aunque se cierre la app o cambie el día.
- El reinicio ocurre únicamente después de confirmar "Cerrar reparto".

2. WHATSAPP
- Se corrigió el error de JavaScript por la variable nombreDia no definida.
- El envío del resumen usa navegación directa a WhatsApp, más confiable en Android/PWA que window.open().

3. EXCEL
- Se mantiene el archivo Excel XML (.xls), compatible con Excel/Sheets.
- Se agregó soporte para selector nativo de guardado cuando el navegador lo permite.
- Se agregó Web Share de archivos para Android (WhatsApp, Drive, Archivos, etc.) cuando está disponible.
- Se agregó descarga alternativa con enlace visible si el WebView bloquea la descarga automática.
- El Blob no se revoca inmediatamente para evitar fallos en WebView Android.

4. LIMPIEZA DE CÓDIGO
- Se eliminó la función duplicada preguntaRapidaHelp().

NOTA
- Esta versión NO modifica ningún repositorio de GitHub.
- Probar especialmente Excel en SPCK y luego en Chrome/PWA instalada.
