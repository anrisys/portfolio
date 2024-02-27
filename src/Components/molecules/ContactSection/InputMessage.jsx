import InputLabel from "../../atoms/ContactSection/InputLabel";

function InputMessage() {
  return (
    <div>
      <InputLabel label={"Message"} />
      <textarea
        className="w-full bg-gray-200 focus:outline-none focus:bg-gray-200 rounded-md pl-2"
        placeholder="Enter your message"
        rows="4"
      />
    </div>
  );
}

export default InputMessage;
