import { BriefParagraph } from "../../atoms/AboutSection";

function Brief() {
  const paragraphs = [
    "I am a backend developer with a passion for tackling challenges and building robust server-side solutions for products. With a keen interest in learning and implementing cutting-edge technologies, I am always on the lookout for opportunities to expand my skill set and enhance my capabilities.",
    "Driven by a desire to contribute to impactful projects, I am open to new opportunities that allow me to leverage my expertise and creativity. I am eager to explore job offers and engage in exciting ventures that push the boundaries of technology.",
    "If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.",
  ];

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <BriefParagraph key={index} paragraph={paragraph} />
      ))}
    </>
  );
}

export default Brief;
