# MasFoco App

## Instrucciones de uso

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js instalado.
3. Instala las dependencias usando `npm install`.
4. Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables de entorno:

PORT=3000

5. Ejecuta la aplicación usando `npm start`.
6. La aplicación estará disponible en http://localhost:3000.

## Endpoints

### Ver un reporte
- Método: GET
- Ruta: /reports/:id
- Descripción: Obtiene un reporte específico por su ID.
- Parámetros de URL: `id` (número) - ID del reporte.
- Respuesta: Objeto JSON que representa el reporte encontrado.

### Ver reportes
- Método: GET
- Ruta: /reports
- Descripción: Obtiene todos los reportes existentes.
- Respuesta: Arreglo JSON con todos los reportes.

### Crear reporte
- Método: POST
- Ruta: /reports
- Descripción: Crea un nuevo reporte.
- Datos requeridos en el cuerpo de la solicitud:
  - `title` (cadena): Título del reporte.
  - `description` (cadena): Descripción del reporte.
  - `location` (cadena): Ubicación del reporte.
- Respuesta: Objeto JSON que representa el reporte creado.

### Borrar reporte
- Método: DELETE
- Ruta: /reports/:id
- Descripción: Elimina un reporte específico por su ID.
- Parámetros de URL: `id` (número) - ID del reporte a eliminar.
- Respuesta: Mensaje JSON que indica que el reporte fue eliminado exitosamente.

## Créditos del README
- Fernando Escobal apoyado con ChatGPT