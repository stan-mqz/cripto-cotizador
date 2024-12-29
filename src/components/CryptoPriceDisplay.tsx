import { useMemo } from "react";
import { useCryptoStore } from "../store";

export const CryptoPriceDisplay = () => {
  const result = useCryptoStore((state) => state.result);
  const hasResult = useMemo(() => !Object.values(result).includes(""), [result]);

  return (
    <div>
      {hasResult && (
        <>
          <h2>Cotización</h2>
          <div className="result">
            <div className="">
              <p>
                El precio es de: <span>{result.PRICE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
