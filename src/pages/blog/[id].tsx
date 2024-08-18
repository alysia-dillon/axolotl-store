import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Blog Post: {id}</h1>
      <p>Content of the blog post goes here.</p>
    </div>
  );
}
