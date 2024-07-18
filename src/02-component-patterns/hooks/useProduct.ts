import { useState } from "react";


export const useProduct = () => {

    const [counter, setcounter] = useState(0)

    const increseBy = (value: number) => {
        setcounter(prev => Math.max(prev + value, 0));
    }

  return {
    counter,
    increseBy,

  }
}
