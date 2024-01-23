import { z } from "zod"

export const AuthCredentials = z.object({
    email: z.string().email(),
    password: z.string().min(6, {message: 'Password must be at least 8 characters long'})
})

export type TAuthCredentials = z.infer<typeof AuthCredentials>