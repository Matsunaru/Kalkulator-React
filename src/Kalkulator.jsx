import React, { useState, useEffect} from "react";


const Kalkulator = () => {
    const [Display, setDisplay] = useState("");
    
    function handleClick(Value){
        setDisplay(Display+Value);
    }
    function handleClear(){
        setDisplay("");
    }
    function sum(){
        setDisplay(eval(Display));
    }

    return(
        <>
        <div className="kalkulator">
            <div className="ekran">
                <span>{Display}</span>
            </div>
            <div>
                <div>
                    <button>(</button>
                    <button>)</button>
                    <button>%</button>
                    <button onClick={handleClear}>C</button>
                </div>
                <div>
                    <button onClick={() => handleClick("7")}>7</button>
                    <button onClick={() => handleClick("8")}>8</button>
                    <button onClick={() => handleClick("9")}>9</button>
                    <button onClick={() => handleClick("/")}>/</button>
                </div>
                <div>
                    <button onClick={() => handleClick("4")}>4</button>
                    <button onClick={() => handleClick("5")}>5</button>
                    <button onClick={() => handleClick("6")}>6</button>
                    <button onClick={() => handleClick("*")}>*</button>
                </div>
                <div>
                    <button onClick={() => handleClick("1")}>1</button>
                    <button onClick={() => handleClick("2")}>2</button>
                    <button onClick={() => handleClick("3")}>3</button>
                    <button onClick={() => handleClick("-")}>-</button>
                </div>
                <div>
                    <button onClick={() => handleClick("0")}>0</button>
                    <button>,</button>
                    <button onClick={sum} >=</button>
                    <button onClick={() => handleClick("+")}>+</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Kalkulator;