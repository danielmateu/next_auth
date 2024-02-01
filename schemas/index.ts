import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Por favor, ingrese un correo válido.',
    }),
    password: z.string().min(1, {
        message: 'Por favor, ingrese una contraseña.',
    }),
});