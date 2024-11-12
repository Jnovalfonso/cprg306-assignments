"use client";

import NewItem from "../../week-5/new-item";
import ItemList from "./item-list";
import itemsJson from "../../week-6/items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user} = useUserAuth();

  const [items, setItems] = useState(itemsJson);

  const [item, setItem] = useState({
    id: "",
    name: "",
    emoji: "",
    quantity: 1,
    category: "Produce"
  });

  const [selectedItemName, setSelectedItemName] = useState('');

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
  };
  
  const handleOnSelectItem = (item) => {
    let name = item.name.split(",")[0].trim();
    setSelectedItemName(name);
  }

    if (!user) {
      return (
          <div>
              <p>You are not signed in.</p>
          </div>
      );
   } else {

    return (
      <main className="m-12 flex flex-row">
        <div>
          <h1 className="text-4xl font-bold mb-8">Shopping List</h1>
          <NewItem onAddItem={onAddItem} />
          <ItemList listItems={items} onItemSelect={handleOnSelectItem}/>
        </div>
       <div className="ml-12 w-96 p-6 border-2 rounded-lg">
          <h1 className="text-3xl font-bold mb-8">Meal Ideas</h1>
          <h2 className="text-xl font-bold mb-8">Meals for: {selectedItemName}</h2>
          <MealIdeas itemName={selectedItemName}/>
       </div>
      </main>
    );
  }
}