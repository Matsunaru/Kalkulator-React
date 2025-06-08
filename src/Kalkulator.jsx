import React, { useState, useEffect} from "react";


const Kalkulator = () => {
    const [Display, setDisplay] = useState("");
    
    function handleClick(Value) {
        const operators = ["+", "-", "*", "/", "."];
    
        if (Display === "" && operators.includes(Value)) return;
    
        const lastChar = Display.slice(-1);
        if (operators.includes(lastChar) && operators.includes(Value)) return;
    
        const lastNumber = Display.split(/[\+\-\*\/]/).pop(); 
        if (lastNumber === "0" && Value === "0") return;
        if (lastNumber === "0" && Value !== "." && !operators.includes(Value)) {
            
            setDisplay(Display.slice(0, -1) + Value);
            return;
        }
    
        setDisplay(Display + Value);
    }
    
    function handleClear(){
        setDisplay("");
    }
    function calculate(expression) {
        try {
            const tokens = expression.match(/(\d+\.?\d*%?|\+|\-|\*|\/)/g);
            if (!tokens) return "Błąd";
    
            let result = parseFloat(tokens[0].replace("%", ""));

            if (tokens[0].endsWith("%")) {
                result = result / 100;
        }
    
            for (let i = 1; i < tokens.length; i += 2) {
                const operator = tokens[i];
                const rawNext = tokens[i + 1];

            let nextNumber;

            if (rawNext.endsWith("%")) {
                let percentValue = parseFloat(rawNext.slice(0, -1));
                if (isNaN(percentValue)) return "Błąd";
                nextNumber = result * (percentValue / 100);
            } else {
                nextNumber = parseFloat(rawNext);
            }
                if (isNaN(nextNumber)) return "Błąd";
    
                switch (operator) {
                    case "+":
                        result += nextNumber;
                        break;
                    case "-":
                        result -= nextNumber;
                        break;
                    case "*":
                        result *= nextNumber;
                        break;
                    case "/":
                        if (nextNumber === 0) return "Nie dziel przez 0";
                        result /= nextNumber;
                        break;
                    default:
                        return "Błąd";
                }
            }
    
            return result;
        } catch (error) {
            return "Błąd";
        }
    }
    
    function sum(){
        setDisplay(calculate(Display).toString());
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
                    <button onClick={() => handleClick("%")}>%</button>
                    <button onClick={handleClear}>C</button>
                </div>
                <div>
                    <button onClick={() => handleClick(7)}>7</button>
                    <button onClick={() => handleClick(8)}>8</button>
                    <button onClick={() => handleClick(9)}>9</button>
                    <button onClick={() => handleClick("/")}>/</button>
                </div>
                <div>
                    <button onClick={() => handleClick(4)}>4</button>
                    <button onClick={() => handleClick(5)}>5</button>
                    <button onClick={() => handleClick(6)}>6</button>
                    <button onClick={() => handleClick("*")}>*</button>
                </div>
                <div>
                    <button onClick={() => handleClick(1)}>1</button>
                    <button onClick={() => handleClick(2)}>2</button>
                    <button onClick={() => handleClick(3)}>3</button>
                    <button onClick={() => handleClick("-")}>-</button>
                </div>
                <div>
                    <button onClick={() => handleClick(0)}>0</button>
                    <button onClick={() => handleClick(".")}>.</button>
                    <button onClick={sum} >=</button>
                    <button onClick={() => handleClick("+")}>+</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Kalkulator;