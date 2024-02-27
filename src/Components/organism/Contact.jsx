// import SectionSubtitle from "../atoms/General/SectionSubtitle";
import SectionTitle from "../atoms/General/SectionTitle";
import InputEmail from "../molecules/ContactSection/InputEmail";
import InputMessage from "../molecules/ContactSection/InputMessage";
import InputName from "../molecules/ContactSection/InputName";

function Contact() {
  return (
    <div className="flex flex-col items-center pb-5" id="contact">
      <SectionTitle title={"Contact"} />
      {/* <SectionSubtitle
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum nulla, rhoncus sed augue eget"
        }
      /> */}
      <div className="w-1/2">
        <InputEmail />
        <InputName />
        <InputMessage />
      </div>
    </div>
  );
}

export default Contact;
