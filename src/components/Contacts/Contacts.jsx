import { useForm } from "react-hook-form";
import Contact from "/Contact.png";
const Contacts = () => {
  const inputText = `p-3 bg-light focus:outline-basic rounded-lg text-basic`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section className="mx-auto w-full "id="contacts">
      <div className="bg-white text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold" >
            Contact Us
          </h1>
          <hr className="mt-2 border-none w-[10%] h-1 rounded-lg bg-basic" />
        </div>
      </div>
      <div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex p-6">
          <div>
            <div className="w-full">
              <img
                className="w-[900px] h-[500px] object-cover hidden md:block"
                src={Contact}
                alt="Contact_Us"
              />
            </div>
          </div>
          <div>
            <form
              className="flex flex-col gap-6"
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
            >
              <div className="flex flex-col">
                <label htmlFor="NAME" className="font-bold text-basic text-lg">
                  Your Name
                </label>
                <input
                  className={inputText}
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className=" mb-4 text-Error">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="EMAIL" className="font-bold text-basic text-lg">
                  Your Email
                </label>
                <input
                  className={inputText}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className=" mb-4 text-Error">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="EMAIL" className="font-bold text-basic text-lg">
                  Do You Want To Ask Anything?
                </label>
                <textarea
                  className={inputText}
                  placeholder="MESSAGE"
                  rows={6}
                  cols={90}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className=" mb-4 text-Error">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}
              </div>

              <button
                className="my-10 w-[200px] rounded-lg bg-basic text-white px-20 py-3 transition duration-500 hover:bg-basic/80"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
