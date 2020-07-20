import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/a" as="/a">
          <a href="/a">
            a
          </a>
        </Link>
      </li>
      <li>
        <Link href="/b" as="/b">
          <a href="/b">
            b
          </a>
        </Link>
      </li>
    </ul>
  );
}
