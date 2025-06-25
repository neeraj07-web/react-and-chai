// customHook can use our built in hooks also --> like useEffect , useState any whatever tehyv want

import {useEffect, useState} from "react"

/// our customHook --> hooks are waht , they are just a function  
function useCurrencyInfo(currency){

    const [data, setData] = useState({}) // default {}-empty element

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
`)
        // the value from the api call is mostly a strinng , therefore we need to convert it to a json
        // .then is used in js --> {contains callback}
        .then((res) => res.json()) // convert to json
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency]) // currency k andar koi v cahange ho toh mei usse vapis se call karwana chhunga , therefore it is a  dependencies
    console.log(data);
    return data // return kar rahay hai bas data ko , setData ko nahi ---> setData ni kar payenge iska yeh matlab hua kya
}

export default useCurrencyInfo;