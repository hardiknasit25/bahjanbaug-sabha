function Login() {
  return (
    <div className="relative h-dvh w-full flex flex-col gap-4 justify-center items-center px-4">
      {/* Background Image */}
      <img
        src="/images/background-maharaj.png"
        alt="background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Content */}
      <div className="w-full z-20 h-14 flex justify-start items-center gap-2 p-4 bg-primaryColor rounded-full text-white">
        <span className="text-white border-r border-white pr-2 text-lg">
          +91
        </span>
        <input
          type="number"
          className="w-full outline-none bg-transparent font-normal text-lg text-white placeholder:text-white/70"
          placeholder="Enter mobile number"
        />
      </div>

      <div className="w-full z-20 h-14 justify-start items-center gap-2 p-4 bg-primaryColor rounded-full text-white">
        <input
          type="number"
          className="w-full outline-none bg-transparent font-normal text-lg text-white placeholder:text-white/70"
          placeholder="Enter password"
        />
      </div>

      <div className="w-full z-20 h-14 flex justify-center items-center gap-2 p-4 bg-white rounded-full font-semibold text-textLightColor">
        <span className="text-xl uppercase tracking-wider">Next</span>
      </div>
    </div>
  );
}

export default Login;
