import Link from 'next/link';

import LogoSquare from '@/components/logo-square';

const { SITE_NAME } = process.env;

export default async function Footer() {
  // const currentYear = new Date().getFullYear();
  //const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  //const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  //const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <LogoSquare />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>KBS Sample</p>
          <p className="md:ml-auto">Vegan Bakery</p>
        </div>
      </div>
    </footer>
  );
}
