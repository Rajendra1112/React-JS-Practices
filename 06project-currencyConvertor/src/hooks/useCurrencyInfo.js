import { useEffect, useState } from "react";

// custom hook
function useCurrencyInfo(currency) {
  // create state to hold the value provided by fetch method which is in json format and the value will be mainly object
  const [data, setData] = useState({});

  // here useEffect hook is used so that fetch method will get invoked immediately once this custom hook mount(dom creation) begin
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  // here we return only created state(variable) however we know that other hooks return array of variable and reference of method but this styling of return in not best suited in this case
  return data;
}

export default useCurrencyInfo;
