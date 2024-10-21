"use client";

import { useState } from "react";
import itemsJson from "./items.json";
import Item from "../week-3/item";

export default function ItemList (){
    const [sortBy, setSortBy] = useState("name");
    let items = [...itemsJson];

    const categories = items.reduce((allCategories, item) => {
    if (!allCategories.includes(item.category)) {
        allCategories.push(item.category);
    }
    
    return allCategories;
}, []);   

    const sortItems = () => {

    switch (sortBy) {
        
        case "name":
            return items.sort((a,b) => a.name.localeCompare(b.name));
        
        case "category": 
            return items.sort((a,b) => a.category.localeCompare(b.category));
        default:
            return items;
        } 
    }

    const handleSort = (sortCriteria) => {
        setSortBy(sortCriteria)
    };

    const sortedItems = sortItems();

    return (
        <section className="pl-4">
            <div className="flex flex-row space-x-6 py-8 w-96">
                <h1>Sort By:</h1>
                <button className={`${sortBy === "name" ? "bg-orange-700" : "bg-orange-500"} p-2 rounded-md` } onClick={() => handleSort("name")}>Name</button>
                <button className={`${sortBy === "category" ? "bg-orange-700" : "bg-orange-500"} p-2 rounded-md` } onClick={() => handleSort("category")}>category</button>
                <button className={`${sortBy === "grouped-category" ? "bg-orange-700" : "bg-orange-500"} p-2 rounded-md` } onClick={() => handleSort("grouped-category")}>Grouped Categories</button>
            </div>
            <div className="space-y-3">
            {sortBy === "grouped-category" ? (
                categories.map((category, index) => {
                    const categoryItems = items.filter((item) => item.category === category); 

                    return (
                        <div key={index} className="">
                            <h1 className="text-3xl font-bold">{category}</h1>
                            <div className="py-4 mb-10">
                                {categoryItems.map((item) => (
                                    <Item
                                        key={item.id}
                                        name={item.name}
                                        quantity={item.quantity}
                                        category={item.category}
                                        emoji={item.emoji}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })
            ) : (
                sortedItems.map((item, id) => (
                    <Item
                        key={id} 
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        emoji={item.emoji}
                    />
                ))
            )}
            </div>
        </section>
        
    );
    
}