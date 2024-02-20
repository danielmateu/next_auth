
/*
    * Es un array de rutas públicas
    * Estas rutas no necesitan autenticación
    * @type {string[]}
*/

export const publicRoutes = [
    "/",
]

/*
    * Es un array de rutas privadas, son las rutas que necesitan autenticación
    * Estas rutas necesitan autenticación, redigiran usuarios logueas a estas rutas
    * @type {string[]}
*/
export const authRoutes = [
    "/auth/login",
    "/auth/register",
]
/*
    *El prefijo de las rutas de autenticación
    * Rutas que empiezan con este prefijo son usadas para la API de autenticación
    * @type {string}
*/
export const apiAuthPrefix = "/api/auth"

/*
    * El path de redirección por defecto después de iniciar sesión
    * @type {string}
*/
export const DEFAULT_LOGIN_REDIRECT = "/settings"