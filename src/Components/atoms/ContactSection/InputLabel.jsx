import PropsTypes from "prop-types";

function InputLabel({ label }) {
  return (
    <div className="text-left text-s md:text-l lg:text-xl tracking-wide">
      {label}
    </div>
  );
}

InputLabel.propTypes = {
  label: PropsTypes.string,
};

export default InputLabel;
