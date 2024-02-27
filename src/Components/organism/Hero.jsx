import Greetings from "../atoms/HeroSection/CTA";

function Hero() {
  return (
    <div className="hero flex items-center justify-around bg-[#176B87] space-x-2 p-8 sm:px-6 lg:px-8 flex-wrap-reverse">
      <div className="greetings-container opacity">
        <Greetings />
      </div>
      <div className="rounded-full w-25vw h-auto border-4 border-[#0A2E3B]">
        <img
          src="images/anrisys.png"
          alt="Xxxx"
          className="hero-image bg-white"
        />
      </div>
    </div>
  );
}

export default Hero;
