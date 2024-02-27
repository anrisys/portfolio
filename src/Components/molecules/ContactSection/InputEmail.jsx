import InputLabel from "../../atoms/ContactSection/InputLabel";

function InputEmail() {
  return (
    <div>
      <InputLabel label={"Email"} />
      <input
        className="w-full bg-gray-200 focus:outline-none focus:bg-gray-200 rounded-md pl-2"
        type="email"
        placeholder="Your email"
      />
    </div>
  );
}

export default InputEmail;
