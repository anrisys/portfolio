import PropsTypes from "prop-types";

function ProjectRole({ role }) {
  return (
    <h3 className="my-2 text-normal tracking-tight font-extralight text-gray-900 dark:text-white">
      Role: {role}
    </h3>
  );
}

ProjectRole.propTypes = {
  role: PropsTypes.string,
};

export default ProjectRole;
