import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Category from '@/components/Category';


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Category />
    </>
  )
}
