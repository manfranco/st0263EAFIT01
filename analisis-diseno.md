# NodeJS Maps Application

By: Marco Antonio Franco - mfranc18@eafit.edu.co

# Descripción de aplicación

Aplicación web que permite ver una ruta personalizada en un mapa, con un CRUD Básico (Usuario, Password)

# 1. Análisis

## 1.1 Requisitos funcionales:

1. Crear Usuario
2. Acceder a través del usuario
3. Borrar Usuario

## 1.2 Definición de tecnología de desarrollo y despliegue para la aplicación:

* Lenguaje de Programación: Javascript
* Framework web backend: NodeJS - Express
* Framework web frontend: no se usa - se utilizará Templates HTML para Vista (V)
* Base de datos: MongoDB
* Web App Server: NodeJS
* Web Server: NGINX y Apache Web Server

# 2. Desarrollo

Se generó la base, con Yeoman:

$ yo express

(este generador, crea una app base ejemplo MVC para gestión de articulos)

# 3. Diseño:

## 3.1 Modelo de datos:

article:

{
    User: String,
    Password: String
}

## 3.2 Servicios Web

/* Servicio Web: Crea un Nuevo usuario
  Método: POST
  URI: /newUser
*/

/* Servicio Web: Busca el usuario para acceder
  Método: GET
  URI: /findbytitle?title=val
*/

/* Servicio Web: Realiza la búsqueda en la base de datos de todos los articulos
  Método: GET
  URI: /articles
*/

/* Servicio Web: Borra un Usuario de la Base de datos.
  Método: GET
  URI: /delarticle?id=val
 */