import React, { useRef, useEffect, useState } from "react";


export default function Countdown() {
    const value = 59;
    const [num, setNum] = useState(value);

    let intervalRef = useRef();

    const decreaseNum = () => setNum((prev) => prev - 1);

    useEffect(() => {
        intervalRef.current = setInterval(decreaseNum, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    const handleReset = () => {
        setNum(value)
    }

    if (num === 0) {
        handleReset()
    }

    return (
        <div className="targetas">{num}</div>
    );
}