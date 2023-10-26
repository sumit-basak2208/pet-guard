"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';

export function Navbar() {
  const pathName = usePathname();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setIsLoggedIn(cookies.log == 1);
  }, []);

  const onLogOut = () => {
    removeCookie("log");
    setIsLoggedIn(false);
    router.push("/");
  }
    return(
        <div className="sticky top-0 z-10">
      <div className="items-center bg-white text-stone-500 flex justify-start">
  <Link href="/" className="text-black cursor-pointer text-xl ml-12 mr-4 py-1">
    <h1 className="text-neutral-800 text-[2.50rem] leading-none font-bold uppercase flex items-center gap-1"><Image src="/img/logo.png" alt="logo" width={60} height={60}/>PetGuard</h1>
  </Link>

  <div className="items-center flex grow">
      <div className='flex grow'>
      <Link href="/" className={`${pathName == "/"? 'text-lime-500': 'text-neutral-800'} cursor-pointer text-lg font-bold ml-8 py-8 uppercase`}>Home</Link>
      <Link href="/tip" className={`${pathName == "/tip"? 'text-lime-500': 'text-neutral-800'} cursor-pointer text-lg font-bold ml-8 py-8 uppercase`}>Tip</Link>
      {isLoggedIn? <Link href="/profile" className={`${pathName == "/profile"? 'text-lime-500': 'text-neutral-800'} cursor-pointer text-lg font-bold ml-8 py-8 uppercase`}>Proflie</Link>: ""}
      </div>
      {isLoggedIn?
      <button onClick={ev => onLogOut()} className={`bg-lime-500 text-white cursor-pointer text-lg font-bold ml-12 py-8 px-12 uppercase`}>Logout <i></i></button>
      :<Link href="/login" className={`${pathName != "/login"? 'text-lime-500 bg-white': 'bg-lime-500 text-white'} cursor-pointer text-lg font-bold ml-12 py-8 px-12 uppercase`}>Login <i></i></Link>}
  </div>
</div>
    </div>
    )
};