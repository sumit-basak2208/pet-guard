import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Login() {
    return(
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar/>
            <div className="grow">
                <div class="bg-white rounded p-8">
  <div class="text-slate-700 mb-5 text-center">
    <h2 class="text-2xl font-bold">Welcome!</h2>
    <p class="text-gray-400">Sign In to your account</p>
  </div>

  <div className="flex justify-center">
    <input type="text" placeholder="Username" class="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
  </div>

  <div className="flex justify-center">
    <input type="password" placeholder="Password" class="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
  </div>

  <div class="items-center flex text-[0.94rem] leading-5 justify-center mb-3">

    <div class="items-center flex justify-between">
      <button class="text-violet-950 cursor-pointer hover:underline">Dont have an account? Register!</button>
    </div>
  </div>

  <div className="flex justify-center">
    <button class="items-start bg-lime-500 text-white inline-block text-[1.06rem] leading-6 font-medium h-11 text-center w-64 rounded">Login <i class="inline-block"></i></button>
  </div>
</div>
            </div>
            <Footer/>
        </div>
    )
}