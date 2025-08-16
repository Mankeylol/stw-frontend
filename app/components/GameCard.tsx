"use client";

import { useEffect, useState } from "react";

export type GameStatus =
  | "created"
  | "starting_soon"
  | "won"
  | "spinning"
  | "lost"
  | "ended_no_participation";

type GameCardProps = {
  id: string;
  rewardPool: number;
  yourBet: number;
  players: number;
  maxPlayers: number;
  startTime: string; // ISO timestamp
  status: GameStatus; // <- NEW
};

export default function GameCard({
  id,
  rewardPool,
  yourBet,
  players,
  maxPlayers,
  startTime,
  status,
}: GameCardProps) {
  const [timeLeft, setTimeLeft] = useState("");

  // countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(startTime).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft("Starting...");
        clearInterval(interval);
      } else {
        const minutes = Math.floor(diff / 1000 / 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  // styles based on status
  const bgStyles: Record<GameStatus, string> = {
    created: "bg-[#000000]",
    starting_soon: "bg-gradient-to-b from-[#792800] to-black",
    won: "bg-gradient-to-b from-[#00A900] to-black",
    spinning: "bg-gradient-to-b from-[#007E6B] to-black",
    lost: "bg-gradient-to-b from-[#7E0000] to-black",
    ended_no_participation: "bg-gradient-to-b from-[#6C6C6C] to-black",
  };

  const timerStyles: Record<GameStatus, string> = {
    created: "bg-gray-600",
    starting_soon: "bg-red-600",
    won: "bg-[#00A900]",
    spinning: "bg-[#00A900]",
    lost: "bg-[#CA0000]",
    ended_no_participation: "bg-gray-600",
  };

  return (
    <div
      className={`w-[90vw] text-white rounded-2xl p-4 shadow-lg border border-[#FF5400] flex flex-col gap-4 ${bgStyles[status]}`}
    >
      {/* Row 1: Reward Pool | Your Bet | Winnings */}
      <div className="flex divide-x divide-gray-700">
        {/* Reward Pool */}
        <div className="flex-1 flex flex-col justify-between px-4">
          <p className="text-[#FFFFFF] text-[16px]">Reward Pool:</p>
          <p className="font-semibold text-[40px] text-[#FF5400]">
            {rewardPool} BTC
          </p>
        </div>

        {/* Your Bet */}
        <div className="flex-1 flex flex-col justify-between px-4">
          <p className="text-[#FFFFFF] text-[16px]">Your Bet:</p>
          <p className="font-semibold text-[40px] text-[#00A28A]">
            {yourBet} BTC
          </p>
        </div>

        {/* Winnings */}
        <div className="flex-1 flex flex-col justify-between px-4">
          <p className="text-[#FFFFFF] text-[16px]">Winnings:</p>
          <p className="font-semibold text-[40px]">
            {yourBet > 0 ? Math.floor(rewardPool / yourBet) : 0} X
          </p>
        </div>
      </div>

      {/* Row 2: Players + Button */}
      <div className="flex items-center justify-between">
        {/* Players */}
        <div>
          <p className="text-[#FFFFFF] text-[16px]">Players:</p>
          <p className="font-semibold">
            {players}/{maxPlayers}
          </p>
        </div>

        {/* Timer / Action */}
        <button
          className={`rounded-lg py-2 px-4 font-semibold ${timerStyles[status]}`}
        >
          {timeLeft}
        </button>
      </div>
    </div>
  );
}
