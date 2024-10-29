"use client";

import { useState } from "react";
import NewItemWeek4 from "../week-4/new-item";

export default function NewItem({onAddItem}) {
    const [newName, setName] = useState("");
    const [newCategory, setCategory] = useState("Produce");
    const [newQuantity, setQuantity] = useState(1);
    const [newEmoji, setEmoji] = useState("")

    const handleAddItem = () => {
        onAddItem({newName, newCategory, newQuantity, newEmoji});

        setName("");
        setCategory("Produce");
        setQuantity(1);
        setEmoji("");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmojiChange = (event) => {
        const input = event.target.value;

        const emojiRegex = /^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)?$/u;
        if (emojiRegex.test(input)) {
            setEmoji(input);
        } 
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const submitFunction = (event) => {
        event.preventDefault();
        handleAddItem();
    };

    return (
        <div className="flex bg-orange-400 rounded-lg pl-4 py-8 w-96">
            <form onSubmit={submitFunction} className="space-y-4 ">
            <div className="flex flex-row space-x-6">
                <input 
                    required
                    id="name" 
                    type="text" 
                    value={newName} 
                    onChange={handleNameChange} 
                    placeholder="Item here" 
                    className="bg-white border-2 rounded-md p-2 text-lg w-44"
                />
                <input 
                    required
                    id="emoji" 
                    type="text" 
                    value={newEmoji} 
                    onChange={handleEmojiChange} 
                    placeholder="Emoji here" 
                    className="bg-white border-2 rounded-md p-2 text-lg w-36" />
            </div>

            <div className="flex flex-row space-x-6 mt-4">
                <NewItemWeek4 quantity={newQuantity} setQuantity={setQuantity} />
                <select
                    id="category"
                    value={newCategory}
                    onChange={handleCategoryChange}
                    className="bg-white border-2 rounded-md p-2 text-lg w-44" 
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>

                <input
                    type="submit"
                    value="+"
                    className="bg-orange-500 text-white border-2 rounded-md p-2 text-lg hover:bg-orange-700 w-full"
                />
            </form>
        </div>
    );
}
