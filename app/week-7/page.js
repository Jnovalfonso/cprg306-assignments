"use client";

import NewItem from "../week-5/new-item";
import ItemList from "./item-list";
import itemsJson from "../week-6/items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsJson);

  const [item, setItem] = useState({
    id: "",
    name: "",
    emoji: "",
    quantity: 1,
    category: "Produce"
  });

  const onAddItem = ({newName, newCategory, newQuantity, newEmoji}) => {
    
    const item = {
      id: generateRandomId(),
      name: newName,
      emoji: newEmoji,
      quantity: newQuantity,
      category: newCategory
    };

    setItem(item);
    setItems((prevItems) => [...prevItems, item]);
    
  };

    
    const generateRandomId = () => {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      
      for (let i = 0; i < 16; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          result += chars[randomIndex];
      }
      
      return result;
    }

    return (
      <main className="m-12">
        <h1 className="text-4xl font-bold mb-8">Shopping List</h1>
        <NewItem onAddItem={onAddItem} />
        <ItemList listItems={items} />
      </main>
    );
  }