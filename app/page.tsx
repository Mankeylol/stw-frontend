import { Bungee } from "next/font/google";

const bungeeFont = Bungee({ weight: "400" });

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#FF5400]">
      <img src="btc-overlay.png" className="w-[40vw] h-[80vh] absolute opacity-58" alt="btc-overlay" />
      <h1 className="text-[64px]/15 z-1 w-[50px] mr-[300px] mt-[250px] -rotate-15 tracking-[.2em]">WIN ROYAL</h1>
      <div className="w-64 h-90 bg-[#2D2828] opacity-64 [clip-path:polygon(0_30%,100%_0,100%_100%,0%_100%)] rounded-[41px]"></div>
    </div>
  );
}
