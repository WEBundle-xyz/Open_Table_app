import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <main className='bg-gray-300 min-h-screen w-screen pt-5'>
    <h1 className='text-center text-red-500'>This is Next 13 / TypeScript / and Tailwind CSS</h1>
  </main>;
}
