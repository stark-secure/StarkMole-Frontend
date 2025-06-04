import { Crown, Medal, Trophy } from "lucide-react";

interface RankBadgeProps {
  rank: number;
}

export function RankBadge({ rank }: RankBadgeProps) {
  const getRankIcon = () => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-300" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-300" />;
      case 3:
        return <Trophy className="h-5 w-5 text-orange-300" />;
      default:
        return null;
    }
  };

  const getRankStyle = () => {
    switch (rank) {
      case 1:
        return "bg-yellow-500 text-yellow-900 border-yellow-400";
      case 2:
        return "bg-gray-400 text-gray-900 border-gray-300";
      case 3:
        return "bg-orange-500 text-orange-900 border-orange-400";
      default:
        return "bg-slate-600 text-white border-slate-500";
    }
  };

  return (
    <div
      className={`
      relative flex items-center justify-center
      w-12 h-12 rounded-full border-2 font-bold text-lg
      ${getRankStyle()}
      shadow-lg
    `}
    >
      {rank <= 3 ? getRankIcon() : rank}
      {rank === 1 && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
      )}
    </div>
  );
}
