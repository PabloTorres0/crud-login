
import {date, z} from 'zod'

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Title is require'
    }),
    description: z.string({
        required_error: 'Description ir required'
    }),
    date: z.string().datetime().optional()
})