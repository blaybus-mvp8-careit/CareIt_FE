import { z } from 'zod'

const signinSchema = z.object({
  id: z
    .string()
    .min(6)
    .max(50)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])/),
  pwd: z
    .string()
    .min(8)
    .max(15)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])/),
})

export default signinSchema
