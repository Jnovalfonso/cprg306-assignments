"use client";

import { useState, useEffect } from "react";
import Item from "./item";

export default function ItemList ({listItems = [], onItemSelect}){
    const [sortBy, setSortBy] = useState("name");
    const [items, setItems] = useState(listItems);

    useEffect(() => {
        setItems(listItems);
      }, [listItems]);

    const categories = items.reduce((allCategories, item) => {
    if (!allCategories.includes(item.category)) {
        allCategories.push(item.category);
    }
    
    return allCategories;
}, []);   

    const sortItems = () => {
        switch (sortBy) {
        case "name":
            return items.slice().sort((a, b) => a.name.localeCompare(b.name));
        case "category":
            return items.slice().sort((a, b) => a.category.localeCompare(b.category));
        default:
            return items;
        }
    };
    
    const sortedItems = sortItems();

    const handleSort = (sortCriteria) => {
        setSortBy(sortCriteria)
    };

    const handleSelectItem = (item) => {
        onItemSelect(item);
    };

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
                                onSelect={() => handleSelectItem(item)} 
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    sortedItems.map((item) => (
                      <Item
                        key={item.id} 
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        emoji={item.emoji}
                        onSelect={() => handleSelectItem(item)}
                      />
                    ))
                  )}
                </div>
              </section>
            
        
    );
    
}