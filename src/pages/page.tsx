import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Pet Store</h1>
      <nav>
        <ul>
          <li>
            <Link href="/adoption-process">Adopt a Pet</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/available-pets">Available Pets</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
