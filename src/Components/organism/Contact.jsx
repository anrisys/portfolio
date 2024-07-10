import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { SectionTitle } from "../atoms/General";

function Contact() {
  const inputErrorStyle =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";

  const inputStyle =
    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light";

  const labelStyle =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300";

  const labelErrorStyle =
    "block mb-2 text-sm font-medium text-red-700 dark:text-red-500";

  const schema = object({
    email: string().email().required(),
    subject: string().required(),
    message: string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (email) => console.log(email);

  return (
    <section
      className="bg-white dark:bg-gray-900 py-8 lg:py-16 px-4 mx-auto max-w-screen-md "
      name="contact"
    >
      {/* <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"> */}
      <div>
        <SectionTitle title={"Contact Me"} />
        <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Feel free to contact me through my email
        </p>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          {/* <form
          className="space-y-8 <div items-center py-8 px-4 mx-auto max-w-screen-xl"
          onSubmit={handleSubmit(onSubmit)}
        > */}
          <div>
            <label
              htmlFor="email"
              className={errors.email ? labelErrorStyle : labelStyle}
            >
              Your email
            </label>
            <input
              id="email"
              {...register("email", { required: true })}
              className={errors.email ? inputErrorStyle : inputStyle}
              placeholder="name@flowbite.com"
              required
            />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{errors.email?.message}</span>
            </p>
          </div>
          <div>
            <label
              htmlFor="subject"
              className={errors.subject ? labelErrorStyle : labelStyle}
            >
              Subject
            </label>
            <input
              id="subject"
              {...register("subject", { required: true })}
              className={errors.subject ? inputErrorStyle : inputStyle}
              placeholder="Let us know how we can help you"
              required
            />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{errors.subject?.message}</span>
            </p>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className={errors.message ? labelErrorStyle : labelStyle}
            >
              Your message
            </label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              rows="6"
              className={errors.message ? inputErrorStyle : inputStyle}
              placeholder="Leave a message ..."
            ></textarea>
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{errors.message?.message}</span>
            </p>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
