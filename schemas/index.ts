import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Por favor, ingrese un correo válido.',
    }),
    password: z.string().min(1, {
        message: 'Por favor, ingrese una contraseña.',
    }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: 'Por favor, ingrese un correo válido.',
    }),
    password: z.string().min(6, {
        message: 'Por favor, ingrese una contraseña de al menos 6 carácteres.',
    }),
    name: z.string().min(2, {
        message: 'Se requiere un nombre',
    }),
});