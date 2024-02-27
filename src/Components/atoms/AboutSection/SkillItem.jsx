import PropsTypes from "prop-types";

function SkillItem({ skillName }) {
  return (
    <div className="p-4 mb-2 mr-2 md:mb-5 md:mr-5 lg:mb-7 text-lg bg-gray-400 bg-opacity-50 rounded-lg font-semibold text-gray-600">
      {skillName}
    </div>
  );
}

SkillItem.propTypes = {
  skillName: PropsTypes.string,
};

export default SkillItem;
