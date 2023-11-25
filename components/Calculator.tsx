import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="p-5 bg-white rounded shadow-lg w-64">
      <div className="flex justify-between items-center mb-5">
        <input
          type="text"
          readOnly
          value={input}
          className="border-2 border-gray-300 rounded w-full p-2"
        />
        <button onClick={clear} className="ml-2 bg-red-500 text-white p-2 rounded">
          C
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "="].map((item, index) => (
          <button
            key={index}
            onClick={() => (item === "=" ? calculate() : handleClick(item.toString()))}
            className={`p-2 text-white rounded ${
              item === "=" ? "bg-green-500" : "bg-blue-500"
            }`}
          >
            {item}
          </button>
        ))}
        {["+", "-", "*", "/"].map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item)}
            className="p-2 bg-yellow-500 text-white rounded"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-5">
        <label className="font-bold">Result:</label>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Calculator;