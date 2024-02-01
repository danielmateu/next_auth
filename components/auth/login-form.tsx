"use client"

import { CardWrapper } from "./card-wrapper"

export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Bienvenido de nuevo"
            backButtonLabel="Volver a inicio"
            backButtonHref="/"
            showSocial
        >
            Login form
        </CardWrapper>
    )
}
