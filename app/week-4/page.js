import NewItem from "./new-item";

export default function Page() {
    return (
      <main className="m-12">
        <h1 className="text-3xl font-bold mb-6">Add New Item</h1>
        <NewItem />
      </main>
    );
  }