"use client"
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from 'react-cookie';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies();
    const router = useRouter();

    const toggleLogin = () => {
        setIsLogin(!isLogin);
    }

    const onSubmitClicked = async(ev) => {
      ev.preventDefault();
      if(email != "admin") {
        setErr("Email not found");
        return;
      }
      if(password != "admin") {
        setErr("Password wrong!");
        return;
      }
      router.push("/");
      setCookie('log', '1');
    }
    return(
        <form className="bg-white min-h-screen flex flex-col">
            <Navbar/>
            <div className="grow">
                <div class="bg-white rounded p-8">
  <div class="text-slate-700 mb-5 text-center">
    <h2 class="text-2xl font-bold">Welcome!</h2>
    <p class="text-gray-400">Sign {isLogin? 'In': "Up"} to your account</p>
  </div>

  <div className="flex justify-center">
    <div>
        <p className="text-violet-950 text-sm">Username:</p>
        <input value={email} onChange={ev => setEmail(ev.target.value)} required placeholder="Username" class="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
    </div>
  </div>

  <div className="flex justify-center">
    <div>
        <p className="text-violet-950 text-sm">Password:</p>
        <input value={password} onChange={ev => setPassword(ev.target.value)} required type="password" placeholder="Password" class="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
    </div>
  </div>

  <div class="items-center flex text-[0.94rem] leading-5 justify-center mb-3">

    <div class="items-center flex justify-between">
      {<button onClick={ev => toggleLogin()} class="text-violet-950 cursor-pointer hover:underline">{isLogin?'Dont have an account? Register!': 'Already have an account? Login!'}</button>}
    </div>
  </div>

  <div className="flex justify-center flex-col items-center">
    <span className="w-max text-red-600 text-sm">{err.length>0? '*'+err: ""}</span>
    <button onClick={ev => onSubmitClicked(ev)} class="items-start bg-lime-500 text-white inline-block text-[1.06rem] leading-6 font-medium h-11 text-center w-64 rounded">{isLogin? 'Login': 'Register'} <i class="inline-block"></i></button>
  </div>
</div>
            </div>
            <Footer/>
        </form>
    )
}