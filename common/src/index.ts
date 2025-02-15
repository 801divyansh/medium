import { z } from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
})


export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
}) 


export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})


export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

//type inference in zod it is use in frontend to check the type of input
export type signupInput = z.infer<typeof signupInput>
export type signinInput = z.infer<typeof signinInput>
export type createBlogInput =z.infer<typeof createBlogInput>
export type updateBlogInput = z.infer<typeof updateBlogInput>