import { useState } from "react";
import { currencies } from "../data/data";
import { useCryptoStore } from "../store";
import { PairSchema } from "../types/types";

export const CriptoSearchForm = () => {
  const [pair, setPair] = useState<PairSchema>({
    criptocurrency: "",
    currency: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
        ...pair,
        [e.target.name] : e.target.value
    })
};

  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda</label>
        <select name="currency" id="currency" onChange={handleChange}>
          <option value="">--Selecione--</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda</label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          onChange={handleChange}
        >
          <option value="">--Selecione--</option>
          {cryptoCurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
};
