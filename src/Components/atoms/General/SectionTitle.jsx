import PropTypes from "prop-types";

function SectionTitle({ title }) {
  return (
    <h2 className="text-[#0A2E3B] text-center text-3xl font-bold md:text-4xl lg:text-5xl align-middle py-8 pb-12 relative">
      <span className="border-b-2 border-black w-1/5">{title}</span>
    </h2>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
