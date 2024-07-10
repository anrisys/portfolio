import PropsTypes from "prop-types";

function SkillItem({ skillName }) {
  return (
    <p className="block w-fit py-2 px-3 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {skillName}
    </p>
  );
}

SkillItem.propTypes = {
  skillName: PropsTypes.string,
};

export default SkillItem;
