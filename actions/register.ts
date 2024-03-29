"use server"

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { generateVerificationToken } from "@/lib/tokens";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import * as z from "zod";


export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Campos inválidos",
        };
    }

    const { email, name, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {
            error: "Este email ya está en uso",
        };
    }

    await db.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
        },
    })

    const verificationToken = await generateVerificationToken(email);

    // TODO: send verification token email

    return {
        success: "Email de confirmación enviado!",
    };
};
