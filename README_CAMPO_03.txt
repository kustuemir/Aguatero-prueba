CAMPO 03 - DEVOLUCION DE ENVASES

Cambio probado a nivel de codigo:
- Se agrego un bloque visible e independiente para registrar la devolucion de envases.
- Se puede registrar una devolucion sin realizar una compra.
- No se bloquea la cantidad devuelta aunque sea mayor que los envases registrados del cliente.
- Los envases 20L y 10-12L recibidos se suman al stock del camion.
- La devolucion queda registrada en el historial del cliente y en el resumen diario.

PRUEBA EN SPCK:
1. Abrir un cliente.
2. Entrar a 📦 Stock.
3. En "Envases que te devuelve el cliente", cargar 3 de 20L y 1 de 10-12L.
4. Tocar "Registrar devolucion de envases".
5. Comprobar que se cierre el modal y aparezca el movimiento en el historial.
6. Revisar Stock del camion: debe aumentar +3 de 20L y +1 de 10-12L.
7. Repetir con una cantidad mayor que "Envases que debe" para comprobar que NO bloquea.
