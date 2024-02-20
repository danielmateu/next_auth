import { auth } from "./auth"
export default auth((req) => {
    const isLoggedIn = !!req.auth;
    console.log("ROUTE: ", req.nextUrl.pathname)
    console.log("Estado de autenticación: ", isLoggedIn)
})

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
    // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
    // matcher: ["/auth/login", "/auth/register"],
}