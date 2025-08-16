"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfileIcon() {
  const { data: session } = useSession();

  if (!session?.user) return null;



  return (
    <Link href="/profile">
      <div className="w-[350px] h-[50px] flex items-center justify-start rounded-full bg-[#000000] pt-[10px] mt-[25px]" >
        <img  className="-ml-[10px]"src="/wallet-icon.svg" alt="wallet-icon" />
        <div className="ml-[30px] -mt-[5px] text-[20px]"> Balance ZERO</div>
      </div>
      <div className="flex flex-row">
        <p className="text-[12px] mt-[3px]">Wallet</p>
        <p className=" text-[#00A900] text-[12px] ml-[30px] m">USD: $0</p>
      </div>
    </Link>
  );
}
