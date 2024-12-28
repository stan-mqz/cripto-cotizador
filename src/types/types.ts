import {z} from 'zod'
import { CryptoCurrencyResponseSchema, CurrencySchema } from "../schemas/cripto-schema";


export type Currency = z.infer<typeof CurrencySchema>

export type CryptoCurrencyResponseSchema = z.infer<typeof CryptoCurrencyResponseSchema>