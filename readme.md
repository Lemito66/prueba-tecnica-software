# Proyecto de Gestión de Clientes y Órdenes

La aplicación está diseñada para gestionar un listado de Clientes, cada uno con Órdenes compuestas de Artículos. Los datos que se deben registrar son:

- **Cliente**: nombre y apellido.
- **Orden**: código único (OC-000001), fecha y sus Artículos.
- **Artículo**: código, nombre y precio unitario.

Para todas las Entidades, se debe proporcionar una pantalla correspondiente para crear instancias de la Entidad. Además, para una de ellas, esa pantalla debe permitir modificar y eliminar instancias, proporcionando un ejemplo completo de CRUD.

La implementación debe centrarse en la lógica, sin necesidad de dedicar mucho esfuerzo al diseño visual o gráfico.


### Preparación de la Base de Datos
1. **Restaurar la Base de Datos desde el Backup**:
   - Ir a la carpeta `database` y ejecutar el backup `prueba-software.bak` para restaurar la base de datos.
  
# Guía de Uso para Scaffold-DBContext
## Descripción
Este archivo proporciona instrucciones para utilizar el comando `Scaffold-DBContext` en la consola de administración de paquetes de NuGet para generar automáticamente clases de contexto de base de datos a partir de una base de datos existente en SQL Server.

## Requisitos Previos
- Microsoft SQL Server instalado localmente o acceso a una instancia remota.
- Visual Studio con el paquete NuGet `Microsoft.EntityFrameworkCore.SqlServer` instalado en el proyecto.
- .net 8

## Pasos para Generar el Contexto de la Base de Datos

1. **Abrir la Consola de Administración de Paquetes de NuGet:**
   - En Visual Studio, vaya a `Herramientas > Administrador de paquetes NuGet > Consola del Administrador de Paquetes`.

2. **Ejecutar el Comando Scaffold-DBContext:**
   - Pegue el siguiente comando en la consola de paquetes NuGet:
     ```bash
     Scaffold-DBContext "Data Source=localhost\SQLEXPRESS;Database=TU_BASE_DE_DATOS;Integrated Security=True;Trusted_Connection=True;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
     ```
     Asegúrese de reemplazar `TU_BASE_DE_DATOS` con el nombre real de su base de datos.

3. **Revisar la Salida:**
   - Después de ejecutar el comando, verifique la salida para asegurarse de que no haya errores y que las clases de contexto se hayan generado correctamente en el directorio especificado (`Models` en este caso).

## Observaciones Importantes
- Este comando generará automáticamente clases de contexto de base de datos y clases de entidad basadas en la estructura de la base de datos existente.
- Es posible que necesite ajustar las clases generadas según sus necesidades específicas después de su creación.
- Para tener un mejor manejo de la conexión con la base de datos mira mi ejemplo en el archivo Program.cs


## Pasos para Ejecutar el Frontend en Desarrollo

### Requisitos Previos
- Tener instalado Node.js en una versión 20.0.0 o superior.

### Instrucciones
1. Asegúrese de estar en la carpeta `frontend-ecommerce`:
    ```bash
     cd <nombre-carpeta>
     ```

2. Instalar todas las dependencias
    ```bash
     npm i
    ```

3. Para ejecutar en desarrollo necesitas los siguientes comandos

```bash
npm run dev
# o
yarn dev
# or
pnpm dev
# or
bun dev
```   



