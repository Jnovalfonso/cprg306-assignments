import Link from "next/link";

export default function List() {
  return (
  <main>
    <ul>
        <li>
            <p>Student Name: Juan Nova</p>
        </li>
        <li>
            <Link href="https://github.com/Jnovalfonso">Link to Github Account: Jnovalfonso</Link>
        </li>
    </ul>
  </main>
  );
}