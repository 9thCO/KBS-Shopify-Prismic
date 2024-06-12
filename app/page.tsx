import { SliceZone } from '@prismicio/react';
import { createClient } from 'prismicio';
import { components } from '../slices';

//export const runtime = process.env.NODE_ENV === 'development' ? 'nodejs' : 'edge';

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle('home');

  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
