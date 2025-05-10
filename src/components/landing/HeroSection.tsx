import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onSignUp: () => void;
}

export const HeroSection = ({ onSignUp }: HeroSectionProps) => {
  return (
    <section
      className="relative w-full max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-end"
      style={{
        backgroundImage: `url('https://public.readdy.ai/ai/img_res/7226c1dadead9ad8155b4f49d1ab00fd.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1rem",
        overflow: "hidden",
        minHeight: "600px",
      }}
    >
      <div className="md:w-1/2 z-10 bg-gray-900 bg-opacity-80 p-8 rounded-xl animate-fadeIn mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-300">
          The Decentralized
          <br />
          Whack-a-Mole Experience
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          StarkMole combines the classic fun of Whack-a-Mole with the
          transparency, security, and innovation of blockchain technology on
          StarkNet.
        </p>
        <div className="flex space-x-4">
        <Button
        onClick={onSignUp}
        className="bg-purple-600 hover:bg-purple-700 text-purple-100 px-8 py-6 text-lg rounded-button whitespace-nowrap animate-pulse"
      >
        Start Playing
      </Button>

          <Button
          
            className="border-purple-500 bg-purple-600 hover:bg-purple-700 text-purple-300 px-8 py-6 text-lg  text-lg !rounded-button whitespace-nowrap animate-pulse"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
