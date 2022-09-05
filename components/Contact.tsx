export const Contact = () => {
  return (
    <div
      className="bg-[url('/assets/images/contact.png')] bg-no-repeat bg-cover bg-center p-100"
      id={"Contact"}
    >
      <div className="mt-20 pb-20 px-4">
        <h1 className="text-[#fff] pt-[80px] text-[35px] font-[900] text-center mb-3">
          Get In Touch
        </h1>
        <div className="about relative mb-20"></div>
        <div className="flex justify-center">
          <form className="w-full max-w-[800px] p-3 md:p-0">
            <div className="flex items-center flex-col md:flex-row gap-x-8">
              <input
                className="appearance-none bg-transparent border border-t-transparent border-x-transparent border-b-[#353535] w-full text-[#fff] py-[15px] px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Name"
                aria-label="Name"
              />
              <input
                className="appearance-none bg-transparent border border-t-transparent border-x-transparent border-b-[#353535] w-full text-[#fff] py-[15px] px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Subject"
                aria-label="Subject"
              />
            </div>
            <div className="mt-3 py-2">
              <input
                className="appearance-none bg-transparent border border-t-transparent border-x-transparent border-b-[#353535] w-full text-[#fff] py-[15px] px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <div className="mt-3">
              <textarea
                id="message"
                rows={4}
                className="block p-1 w-full text-sm text-[#fff] bg-transparent border border-t-transparent border-x-transparent border-b-[#353535] focus:ring-blue-500 focus:outline-none dark:placeholder-gray-400"
                placeholder=" Message"
              ></textarea>
            </div>
            <div className="mt-4">
              <button className="before:content-[''] before:absolute before:w-[40%] before:h-[100%] before:left-0 before:top-0 before: before:right:0 before:bg-[#ffffff12] before:z-[-1] relative z-[1] before:ease-in before:duration-300 text-[13px] font-[500] text-[#fff] px-7 py-3 cursor-pointer hover:before:w-[100%]">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
