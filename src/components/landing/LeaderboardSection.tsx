"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { PlayerCard } from "../leaderboard/PlayerCard";

interface Player {
  id: string;
  rank: number;
  previousRank?: number;
  name: string;
  level: number;
  points: number;
  avatar: string;
  wallet?: string;
  achievements: Achievement[];
  streak: number;
  gamesPlayed: number;
  winRate: number;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

const mockPlayers: Player[] = [
  {
    id: "1",
    rank: 1,
    previousRank: 2,
    name: "MoleKing",
    level: 24,
    points: 2456,
    avatar: "👑",
    wallet: "0x1234...5678",
    achievements: [
      {
        id: "1",
        name: "Crown Holder",
        description: "Reached #1 on leaderboard",
        icon: "👑",
        rarity: "legendary",
      },
      {
        id: "2",
        name: "Score Master",
        description: "Scored over 2000 points",
        icon: "🎯",
        rarity: "epic",
      },
      {
        id: "3",
        name: "Streak King",
        description: "10 game win streak",
        icon: "🔥",
        rarity: "rare",
      },
    ],
    streak: 12,
    gamesPlayed: 156,
    winRate: 78,
  },
  {
    id: "2",
    rank: 2,
    previousRank: 1,
    name: "WhackMaster",
    level: 22,
    points: 2189,
    avatar: "🎭",
    wallet: "0x8765...4321",
    achievements: [
      {
        id: "4",
        name: "Precision Pro",
        description: "High accuracy rate",
        icon: "🎯",
        rarity: "epic",
      },
      {
        id: "5",
        name: "Speed Demon",
        description: "Fast reaction times",
        icon: "⚡",
        rarity: "rare",
      },
    ],
    streak: 8,
    gamesPlayed: 134,
    winRate: 82,
  },
  {
    id: "3",
    rank: 3,
    previousRank: 3,
    name: "MoleMaster99",
    level: 20,
    points: 1987,
    avatar: "🔥",
    wallet: "0x9999...0000",
    achievements: [
      {
        id: "6",
        name: "Veteran",
        description: "100+ games played",
        icon: "🏆",
        rarity: "rare",
      },
      {
        id: "7",
        name: "Consistent",
        description: "Daily player for 30 days",
        icon: "📅",
        rarity: "common",
      },
    ],
    streak: 5,
    gamesPlayed: 198,
    winRate: 65,
  },
  {
    id: "4",
    rank: 4,
    previousRank: 5,
    name: "BlockChampion",
    level: 19,
    points: 1845,
    avatar: "💎",
    wallet: "0xaaaa...bbbb",
    achievements: [
      {
        id: "8",
        name: "Rising Star",
        description: "Climbed 5 ranks in a day",
        icon: "⭐",
        rarity: "rare",
      },
    ],
    streak: 3,
    gamesPlayed: 89,
    winRate: 71,
  },
  {
    id: "5",
    rank: 5,
    previousRank: 4,
    name: "StarkWhacker",
    level: 18,
    points: 1756,
    avatar: "🎮",
    wallet: "0xcccc...dddd",
    achievements: [
      {
        id: "9",
        name: "Newcomer",
        description: "First week completed",
        icon: "🌟",
        rarity: "common",
      },
    ],
    streak: 2,
    gamesPlayed: 67,
    winRate: 68,
  },
];

export function LeaderboardSection() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulate API call
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1500));
        setPlayers(mockPlayers);
      } catch (err) {
        setError("Failed to load leaderboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();

    // Set up polling for real-time updates
    const interval = setInterval(fetchLeaderboard, 180000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-cyan-400 mx-auto mb-4" />
          <p className="text-white/80">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="#leaderboard" className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          Global Leaderboard
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          See the top players from around the world and compete to claim your
          spot at the top.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {players.map((player, index) => (
          <PlayerCard key={player.id} player={player} index={index} />
        ))}
      </div>
    </div>
  );
}
