"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  UserPlus,
  Swords,
  TrendingUp,
  TrendingDown,
  Zap,
} from "lucide-react";
import { RankBadge } from "./RankBadge";

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

interface PlayerCardProps {
  player: Player;
  index: number;
}

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "from-yellow-400 to-yellow-600";
    case 2:
      return "from-gray-300 to-gray-500";
    case 3:
      return "from-orange-400 to-orange-600";
    default:
      return "from-slate-600 to-slate-800";
  }
};

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "legendary":
      return "border-yellow-400 bg-yellow-400/10";
    case "epic":
      return "border-purple-400 bg-purple-400/10";
    case "rare":
      return "border-blue-400 bg-blue-400/10";
    default:
      return "border-gray-400 bg-gray-400/10";
  }
};

export function PlayerCard({ player, index }: PlayerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const rankChange = player.previousRank
    ? player.previousRank - player.rank
    : 0;
  const isRankUp = rankChange > 0;
  const isRankDown = rankChange < 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Card
        className={`bg-gradient-to-r ${getRankColor(player.rank)} border-0 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <RankBadge rank={player.rank} />
                {rankChange !== 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2"
                  >
                    {isRankUp ? (
                      <TrendingUp className="h-4 w-4 text-green-400" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-400" />
                    )}
                  </motion.div>
                )}
              </div>

              <div className="text-4xl">{player.avatar}</div>

              <div>
                <h3 className="text-xl font-bold text-white">{player.name}</h3>
                <p className="text-white/70">Level {player.level}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-white">
                {player.points.toLocaleString()} pts
              </p>
              {rankChange !== 0 && (
                <p
                  className={`text-sm ${isRankUp ? "text-green-400" : "text-red-400"}`}
                >
                  {isRankUp ? "+" : ""}
                  {rankChange} rank{Math.abs(rankChange) !== 1 ? "s" : ""}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hover Card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-50 mt-2"
          >
            <Card className="bg-slate-900/95 backdrop-blur-sm border border-slate-700">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Player Stats */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Player Stats
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Games Played:</span>
                        <span className="text-white">{player.gamesPlayed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Win Rate:</span>
                        <span className="text-white">{player.winRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Current Streak:</span>
                        <span className="text-white flex items-center gap-1">
                          <Zap className="h-3 w-3 text-yellow-400" />
                          {player.streak}
                        </span>
                      </div>
                      {player.wallet && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Wallet:</span>
                          <span className="text-white font-mono text-xs">
                            {player.wallet}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {player.achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className={`flex items-center gap-2 p-2 rounded-lg border ${getRarityColor(achievement.rarity)}`}
                        >
                          <span className="text-lg">{achievement.icon}</span>
                          <div>
                            <p className="text-white text-sm font-medium">
                              {achievement.name}
                            </p>
                            <p className="text-gray-400 text-xs">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex gap-2 mt-6 pt-4 border-t border-slate-700">
                  <Button size="sm" variant="outline" className="flex-1">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Follow
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Swords className="h-4 w-4 mr-2" />
                    Challenge
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
