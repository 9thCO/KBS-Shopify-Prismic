import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import LogoSquare from '@/components/logo-square';
import { createClient } from '@/prismicio';
import { PrismicLink } from '@prismicio/react';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const client = createClient();
  const navListPrismic = await client.getSingle('nav');

  return (
    <nav className="layout relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <Suspense>
          <MobileMenu menu={navListPrismic.data?.navlist} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {navListPrismic.data.navlist.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {navListPrismic.data.navlist.map((item) => (
                <li key={item.title}>
                  <PrismicLink
                    field={item?.path}
                    internalComponent={Link}
                    className="cursor-pointer text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </PrismicLink>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">{/* <Search /> */}</div>
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
