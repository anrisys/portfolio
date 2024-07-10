import PropsTypes from "prop-types";

function BriefParagraph({ paragraph }) {
  return <p className="mb-3 text-gray-500 dark:text-gray-400">{paragraph}</p>;
}

BriefParagraph.propTypes = {
  paragraph: PropsTypes.string,
};

export default BriefParagraph;
