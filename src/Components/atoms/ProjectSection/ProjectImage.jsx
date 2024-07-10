import PropTypes from "prop-types";

function ProjectImage({ src, alt }) {
  return (
    <img
      className="w-full border-[2px] rounded-xl border-gray-300"
      src={src}
      alt={alt}
    />
  );
  // return (
  //   <div>
  //     <div className="relative mx-auto w-full border-gray-800 dark:border-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
  //       <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
  //         <img
  //           src={src}
  //           className="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl"
  //           alt={alt}
  //         />
  //       </div>
  //     </div>
  //     <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
  //     <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
  //   </div>
  // );
}

ProjectImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImage;
