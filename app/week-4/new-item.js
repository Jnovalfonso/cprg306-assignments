"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity >= 19) {
            incrementButton.disabled = true;
            incrementButton.style.backgroundColor = "#545775";
        }
        decrementButton.disabled = false;
        decrementButton.style.backgroundColor = "blue";
        setQuantity(quantity + 1);
    }

    const decrement = () => {

        if (quantity == 2) {
            decrementButton.disabled = true;
            decrementButton.style.backgroundColor = "#545775";
        }

        if (quantity <= 1) {
            return;
        }

        incrementButton.disabled = false;
        incrementButton.style.backgroundColor = "#2030E5";
        setQuantity(quantity - 1);
    }

    return (
        <div>
            <div className="flex flex-row space-x-4 border-black border-2 max-w-fit text-3xl p-4 "> 
                <p>Quantity: {quantity}</p>
                <button id="decrementButton" className="bg-[#545775] text-white p-2 rounded-md" onClick={decrement} >-</button>
                <button id="incrementButton" className="bg-[#2030E5] text-white p-2 rounded-md"  onClick={increment}>+</button>
            </div>
        </div>
    );
}