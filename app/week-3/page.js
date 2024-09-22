import Item from "./item"
import {itemList} from "./item-list"


export default function Page() {

    return (
        <main className="m-5">
            <h1 className="text-4xl font-bold mb-2">Shopping List</h1>
            <h2 className="font-light mb-5">Week #3 Assignment</h2>
            <div className="space-y-3">
                {itemList.map((item, index) => (
                <Item
                    key={index} // Use index as key or a unique identifier if available
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    emoji={item.emoji}
                />
                ))}
            </div>
        </main>
    )
  }