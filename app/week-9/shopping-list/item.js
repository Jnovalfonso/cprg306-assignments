
export default function Item(props) {
    let {name, quantity, category, emoji, onSelect} = props

    return (
        <main>
            <div className=" inline-flex flex-row p-2 hover:bg-slate-300 transition-colors duration-200" onClick={onSelect}>
                <div className="text-5xl py-2">{emoji}</div>

                <div className="mx-6 w-56 bg-slate-200 p-2">
                    <div className="text-2xl font-bold mb-3">{name}</div>
                    <div className="">Quantity: {quantity}</div>
                    <div className="">Category: {category}</div>
                </div>
                
            </div>
        </main>
    );
}
