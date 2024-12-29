import { create } from "zustand";
import { CryptoCurrencyResponseSchema, PairSchema } from "./types/types";
import { devtools } from "zustand/middleware";
import { fetchCurrenCryptoPrice, getCryptos } from "./services/CryptoService";


type CryptoStore = {
  cryptoCurrencies: CryptoCurrencyResponseSchema[];
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: PairSchema) => Promise<void>
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    //De esta manera podemos manejar una acción asíncrona
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies,
      }));
    },

    fetchData: async (pair) => {
     await fetchCurrenCryptoPrice(pair)
    }
  }))
);
