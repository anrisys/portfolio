import PropsTypes from "prop-types";

function ProjectRole({ role }) {
  return (
    <p className="text-[#0A2E3B] text-left text-s md:text-l lg:text-xl font-light w-full">
      Role: {role}
    </p>
  );
}

ProjectRole.propTypes = {
  role: PropsTypes.string,
};

export default ProjectRole;
