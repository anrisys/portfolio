import PropTypes from "prop-types";

function ProjectImage({ src, alt }) {
  return (
    <div className="border-solid border-4 border-[#0A2E3B] w-1/2 object-fill rounded-lg mx-3">
      <img src={src} alt={alt} className="object-cover h-60" />
    </div>
  );
}

ProjectImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImage;
