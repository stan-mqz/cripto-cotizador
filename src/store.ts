import { create } from "zustand";
import { CryptoCurrencyResponse, Pair, CryptoPrice } from "./types/types";
import { devtools } from "zustand/middleware";
import { fetchCurrenCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrencyResponse[];
  result: CryptoPrice;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    result: {
      IMAGEURL: "",
      PRICE: "",
      HIGHDAY: "",
      LOWDAY: "",
      CHANGEPCT24HOUR: "",
      LASTUPDATE: "",
    },
    loading: false,
    //De esta manera podemos manejar una acción asíncrona
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies,
      }));
    },

    fetchData: async (pair) => {
      set(() => ({
        loading: true,
      }));
      const result = await fetchCurrenCryptoPrice(pair);

      set(() => ({
        result,
        loading: false,
      }));
    },
  }))
);
