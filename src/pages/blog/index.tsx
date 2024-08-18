import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <article>
        <h2>
          <Link href="/blog/why-adopt">Why Adopting Pets is Important</Link>
        </h2>
        <p>Adopting pets saves lives and gives animals a second chance.</p>
      </article>
    </div>
  );
}
