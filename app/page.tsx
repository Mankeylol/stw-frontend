'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="font-sans items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 bg-[#FF5400]">
      <img src="btc-overlay.png" className="w-[40vw] h-[80vh] absolute opacity-58 top-[20px]" alt="btc-overlay" />
      <h1 className="text-[64px]/15 z-1 w-[50px] mr-[300px] mt-[20px] -rotate-15 tracking-[.2em]">WIN ROYAL</h1>
      <img src="hero-bg-blur.svg" className="w-[41vw] h-[66vh] absolute opacity-64 mix-blend-difference top-[230px] left-[430px]" alt="btc-overlay" />
      <div className="z-2 mt-[140px] isolate text-[38px]/18">
        <p className="m-0 p-[0px] z-2 ">FULLY ON CHAIN</p>
        <p className="m-0 p-[0px] z-2 ">DECENTRALIZED</p>
        <p className="m-0 p-[0px] z-2 ">INSTANT</p>
        <button onClick={() => router.push("/onboaring")} className="z-2 mt-[20px] isolate text-[15px] bg-white text-[#141414] ml-[20px] w-[270px] h-[50px] flex items-center justify-center rounded-[50px] cursor-pointer">
          Type email
        </button>
      </div>
      <div className="flex flex-row items-center mt-[100px]">
        <img src="/Line-1.svg" alt="line" className="-ml-[10px]" />
        <img src="/Line-1.svg" alt="line" className="-ml-[10px]" />
        <img src="/Line-1.svg" alt="line" className="-ml-[10px]" />
        <button className="ml-[40px] relative cursor-pointer" onClick={() => router.push("/onboaring")}>
        <img src="/enter-btn.svg" />
        <span className="flex absolute inset-0 items-center justify-center text-white font-bold">Enter</span>
        </button>
        
      </div>

    </div>
  );
}
