import { Button } from "@/components/ui/button";

interface NavigationProps {
  onLogin: () => void;
  onSignUp: () => void;
}

export const Navigation = ({ onLogin, onSignUp }: NavigationProps) => {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3 animate-slideInLeft">
        <img
          src="https://readdy.ai/api/search-image?query=cute cartoon mole character with goggles and a mining helmet, digital art style, game mascot, purple background, high quality, detailed, vibrant colors&width=60&height=60&seq=logo1&orientation=squarish"
          alt="StarkMole Logo"
          className="h-12 w-12 animate-float"
        />
        <h1 className="text-2xl font-bold text-purple-300">StarkMole</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a
          href="#features"
          className="text-cyan-300 hover:text-purple-300 transition-colors cursor-pointer animate-slideInLeft animate-delay-100"
        >
          Features
        </a>
        <a
          href="#how-to-play"
          className="text-cyan-300 hover:text-purple-300 transition-colors cursor-pointer animate-slideInLeft animate-delay-200"
        >
          How to Play
        </a>
        <a
          href="#leaderboard"
          className="text-cyan-300 hover:text-purple-300 transition-colors cursor-pointer animate-slideInLeft animate-delay-300"
        >
          Leaderboard
        </a>
        <a
          href="#about"
          className="text-cyan-300 hover:text-purple-300 transition-colors cursor-pointer animate-slideInLeft animate-delay-400"
        >
          About
        </a>
      </nav>
      <div className="flex items-center space-x-3 animate-slideInRight">
        <Button
          variant="outline"
          onClick={onLogin}
          className="border-purple-500 hover:bg-purple-700 text-cyan-300 !rounded-button whitespace-nowrap"
        >
          Login
        </Button>
        <Button
          onClick={onSignUp}
          className="bg-purple-600 hover:bg-purple-700 text-cyan-100 !rounded-button whitespace-nowrap animate-pulse"
        >
          Play Now
        </Button>
      </div>
    </header>
  );
};
