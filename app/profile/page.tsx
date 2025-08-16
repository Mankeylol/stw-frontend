"use client";

import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session?.user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p><strong>Name:</strong> {session.user.name}</p>
      <p><strong>Email:</strong> {session.user.email}</p>


      <button className="mt-[20px] text-[15px] bg-white text-[#141414] ml-[20px] w-[270px] h-[50px] flex items-center justify-center rounded-[50px] cursor-pointer" onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
