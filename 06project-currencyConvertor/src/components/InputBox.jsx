import React, { useId } from "react";

function InputBox({
  // all the state and reference of state controller below are the properties which will be passed while calling the components
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  // data from api is store inside this below array and looping is applied to access data
  currencyOptions = [],
  selectCurrency = "usd",
  // by default input field for amount is enabled but if user want to disable it then they can
  amountDisable = false,
  currencyDisable = false,
  // if user want to pass their own class
  className = "",
}) {
  const amountInputId = useId();
  return (
    <>
      <div className={`bg-white p-3 rounded-lg flex text-sm ${className}`}>
        <div className="w-1/2">
          <label
            htmlFor={amountInputId}
            className="text-black/40 mb-2 inline-block"
          >
            {label}
          </label>
          <input
            id={amountInputId}
            type="number"
            className="outline-none w-full bg-transparent py-1.5"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => {
              // here && acts as a checker i.e. if onAmountChange function is passed while calling this component but if not passed then onAmountChange() will get executed
              onAmountChange && onAmountChange(Number(e.target.value));
            }}
          />
        </div>

        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/80 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 coursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onAmountChange(e.target.value)}
            disabled={currencyDisable}
          >
            {currencyOptions.map((currencyName) => (
              // key is imp when we loop the element
              <option key={currencyName} value={currencyName}>
                {currencyName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
