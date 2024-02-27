import { Github, LinkedIn } from "../../../assets/icons";

function Social() {
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-left font-light text-s md:text-l lg:text-xl leading-relaxed">
        Reach me on:{" "}
      </p>
      <div className="flex">
        <LinkedIn />
        <Github />
      </div>
    </div>
  );
}
export default Social;
