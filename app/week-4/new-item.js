"use client";
import { useState } from "react";

export default function NewItemWeek4({ quantity, setQuantity }) {
    const [localQuantity, setLocalQuantity] = useState(quantity || 1);

    const increment = () => {
        if (localQuantity >= 19) {
            document.getElementById("incrementButton").disabled = true;
            document.getElementById("incrementButton").style.backgroundColor = "#545775";
        }
        document.getElementById("decrementButton").disabled = false;
        document.getElementById("decrementButton").style.backgroundColor = "#2030E5";

        setLocalQuantity(localQuantity + 1);
        if (setQuantity) setQuantity(localQuantity + 1);
    };

    const decrement = () => {
        if (localQuantity <= 1) {
            return; 
        }

        if (localQuantity === 2) {
            document.getElementById("decrementButton").disabled = true;
            document.getElementById("decrementButton").style.backgroundColor = "#545775";
        }

        document.getElementById("incrementButton").disabled = false;
        document.getElementById("incrementButton").style.backgroundColor = "#2030E5";

        setLocalQuantity(localQuantity - 1);
        if (setQuantity) setQuantity(localQuantity - 1);
    };

    return (
        <div>
            <div className="flex flex-row space-x-4 border-2 rounded-md max-w-fit text-lg p-4 bg-white"> 
                <p className="w-3 mr-4">{localQuantity}</p>
                <button type="button" id="decrementButton" className="bg-[#545775] text-white px-2 rounded-md" onClick={decrement}>-</button>
                <button type="button" id="incrementButton" className="bg-[#2030E5] hover:bg-[#1d1f66] text-white px-2 rounded-md" onClick={increment}>+</button>
            </div>
        </div>
    );
}
