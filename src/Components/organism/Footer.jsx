import Logo from "../atoms/HeaderSection/Logo";
import Social from "../molecules/FooterSection/Socials";

function Footer() {
  return (
    <div className="bg-gray-200 flex items-center justify-around py-10">
      <Logo />
      <Social />
      <p className="text-left text-s md:text-l lg:text-xl leading-relaxed">
        2024 &#169; Anris Y. Simorangkir
      </p>
    </div>
  );
}

export default Footer;
