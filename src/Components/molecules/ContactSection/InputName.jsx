import InputLabel from "../../atoms/ContactSection/InputLabel";

function InputName() {
  return (
    <div>
      <InputLabel label={"Name"} />
      <input
        className="w-full bg-gray-200 focus:outline-none focus:bg-gray-200 rounded-md pl-2"
        type="text"
        placeholder="Your name"
      />
    </div>
  );
}

export default InputName;
