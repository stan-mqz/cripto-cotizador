import { useState } from "react";
import { currencies } from "../data/data";
import { useCryptoStore } from "../store";
import { PairSchema } from "../types/types";
import { ErrorMessage } from "./ErrorMessage";

export const CriptoSearchForm = () => {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
  const [pair, setPair] = useState<PairSchema>({
    criptocurrency: "",
    currency: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(pair).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError('')
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className="field">
        <label htmlFor="currency">Moneda</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
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
          value={pair.criptocurrency}
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
