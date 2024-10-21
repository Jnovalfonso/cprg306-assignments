export default function Item(props) {
    let {name, quantity, category, emoji} = props
    return (
        <main>
            <div className=" flex flex-row p-2">
                <div className="text-5xl py-2">{props.emoji}</div>

                <div className="mx-6 w-1/2 max-w-56 bg-slate-200 p-2">
                    <div className="text-2xl font-bold mb-3">{name}</div>
                    <div className="">Quantity: {quantity}</div>
                    <div className="">Category: {category}</div>
                </div>
                
            </div>
        </main>
    );
}
