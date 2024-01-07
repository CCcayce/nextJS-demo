import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/posts/abc">
          Go to pages/post/[pid].js
        </Link>
      </li>
      <li>
        <Link href="/posts/abc?foo=bar">
          Also goes to pages/post/[pid].js
        </Link>
      </li>
      <li>
        <Link href="/posts/abc/a-comment">
          Go to pages/post/[pid]/[comment].js
        </Link>
      </li>
    </ul>
  )
}

export default Home