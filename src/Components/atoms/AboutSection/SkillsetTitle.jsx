import PropTypes from "prop-types";

function SkillsetTitle({ skillsetTitle }) {
  return (
    <h3 className="text-left text-normal mb-2  text-gray-500 dark:text-gray-400">
      {skillsetTitle}
    </h3>
  );
}

SkillsetTitle.propTypes = {
  skillsetTitle: PropTypes.string,
};

export default SkillsetTitle;
