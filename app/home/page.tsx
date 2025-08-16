"use client";

import ProfileIcon from "../components/profileIcon";
import GameCard, { GameStatus } from "../components/GameCard";
import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter();
    const games: {
        id: string;
        rewardPool: number;
        yourBet: number;
        players: number;
        maxPlayers: number;
        startTime: string;
        status: GameStatus;
    }[] = [
            {
                id: "1",
                rewardPool: 0.5,
                yourBet: 0.05,
                players: 4,
                maxPlayers: 10,
                startTime: "2025-08-16T18:30:00Z",
                status: "created"
            },
            {
                id: "2",
                rewardPool: 1.2,
                yourBet: 0.1,
                players: 8,
                maxPlayers: 8,
                startTime: "2025-08-16T20:00:00Z",
                status: "starting_soon"
            },
            {
                id: "3",
                rewardPool: 0.5,
                yourBet: 0.05,
                players: 4,
                maxPlayers: 10,
                startTime: "2025-08-16T18:30:00Z",
                status: "won"
            },
            {
                id: "4",
                rewardPool: 1.2,
                yourBet: 0.1,
                players: 8,
                maxPlayers: 8,
                startTime: "2025-08-16T20:00:00Z",
                status: "spinning"
            },
        ];

    return <div className="min-h-screen">
        <div className=" flex justify-center  bg-[#2D2828]">
            <ProfileIcon />
            <button className=" cursor-pointer" onClick={() => router.push("/create-game")}>Create Game</button>
        </div>
        <div className=""></div>
        <img src="btc-overlay.png" className="w-[41vw] h-[82vh] absolute opacity-90 top-[24%] mix-blend-color-dodge left-[30%]" alt="btc-overlay" />
        <div className="mt-[40px]">
            <div className="flex flex-row">
                <div className=" relative cursor-pointer ml-[160px]">
                    <img src="home-filter-icon.svg" alt="" />
                    <p className="absolute top-[10px] left-[50px] text-[12px] text-[#FF5400]">
                        All
                    </p>
                </div>
                <div className=" relative cursor-pointer">
                    <img src="home-filter-icon.svg" alt="" />
                    <p className="absolute top-[10px] left-[35px] text-[12px] text-[#FF5400]">
                        Ongoing
                    </p>
                </div>
            </div>
            <div className=" w-[99vw] h-[600px] overflow-y-auto backdrop-blur-[100px] -mt-[4px]  bg-[#000000]/50 rounded-[20px]" >
                <div className="relative flex flex-col items-center gap-6 w-ful z-10 mt-[20px]">
                    {games.map((game) => (
                        <GameCard key={game.id} {...game} />
                    ))}
                </div>
            </div>
        </div>
    </div>;
}