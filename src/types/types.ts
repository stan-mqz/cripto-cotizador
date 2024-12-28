import {z} from 'zod'
import { CryptoCurrencyResponseSchema, CurrencySchema, PairSchema } from "../schemas/cripto-schema";


export type Currency = z.infer<typeof CurrencySchema>

export type CryptoCurrencyResponseSchema = z.infer<typeof CryptoCurrencyResponseSchema>

export type PairSchema = z.infer<typeof PairSchema>