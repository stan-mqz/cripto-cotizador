import axios from "axios";
import { create } from "zustand";
import { CryptoCurrenciesResponseSchema} from "./schemas/cripto-schema";


const getCryptos = async () => {

    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data : {Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    console.log(result)
}

export const useCryptoStore = create(() => ({

  fetchCryptos: () => {
    getCryptos()
},

}));
