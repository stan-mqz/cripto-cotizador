
import { currencies } from "../data/data"
import { useCryptoStore } from "../store"

export const CriptoSearchForm = () => {

    const cryptoCurrencies = useCryptoStore(state => state.cryptoCurrencies)

  return (
    <form className="form">
        <div className="field">
            <label htmlFor="currency">Moneda</label>
            <select name="currency" id="currency">
                <option value="">--Selecione--</option>
                {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>

        <div className="field">
            <label htmlFor="criptocurrency">Criptomoneda</label>
            <select name="criptocurrency" id="criptocurrency">
                <option value="">--Selecione--</option>
                {cryptoCurrencies.map(crypto => (
                    <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                ))}
            </select>
        </div>

        <input type="submit" value='Cotizar'/>

    </form>
)
}
