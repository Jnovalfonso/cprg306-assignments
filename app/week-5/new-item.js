"use client";

import { useState } from "react";
import NewItemWeek4 from "../week-4/new-item";

export default function NewItem() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const submitFunction = (event) => {
        event.preventDefault();
        alert(`Added Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
        window.location.reload();
    };

    return (
        <div className="flex bg-blue-800 pl-4 py-8 w-96">
            <form onSubmit={submitFunction} className="space-y-4 ">
                <input 
                    required
                    id="name" 
                    type="text" 
                    value={name} 
                    onChange={handleNameChange} 
                    placeholder="Item here" 
                    className="bg-white border-2 rounded-md p-2 text-lg w-full"
                />
                <div className="flex flex-row space-x-6">
                    <NewItemWeek4 quantity={quantity} setQuantity={setQuantity} />
                    <select
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                        className="bg-white border-2 rounded-md p-2 text-lg"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen Foods">Frozen Foods</option>
                        <option value="canned Goods">Canned Goods</option>
                        <option value="dry Goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="+"
                    className="bg-blue-500 w-40 text-white border-2 rounded-md p-2 text-lg hover:bg-blue-700 w-full"
                />
            </form>
        </div>
    );
}
