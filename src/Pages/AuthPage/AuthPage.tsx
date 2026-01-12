import { useState } from "react";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";

import foodImg from "../../assets/foof1-removebg-preview.png";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen w-full flex justify-center bg-zinc-50 px-4">
      
      <div className="
      mt-12
        relative
        w-full max-w-[1200px]
        h-auto lg:h-[800px]
        bg-white
        rounded-2xl
        shadow-2xl
        overflow-hidden
        flex flex-col lg:block
      ">

        <div
          className={`
            w-full lg:w-1/2
            p-6 lg:p-10
            transition-all duration-700 ease-in-out
            lg:absolute lg:top-0 lg:h-full
            ${isLogin ? "lg:left-0" : "lg:left-1/2"}
          `}
        >
          {isLogin ? (
            <LoginForm />
          ) : (
            <RegisterForm setIsLogin={setIsLogin} />
          )}
        </div>

        <div
          className={`
            w-full lg:w-1/2
            h-[250px] lg:h-full
            flex items-center justify-center
            transition-all duration-700 ease-in-out
            relative
            lg:absolute lg:top-0
            ${isLogin ? "lg:left-1/2" : "lg:left-0"}
          `}
        >
          <div className="absolute inset-0 bg-orange-400 z-0"></div>

          <img
            src={foodImg}
            alt="food"
            className="hidden lg:block absolute w-[420px] z-0"
          />

          {/* CONTENT */}
          <div className="relative z-10 text-center px-6 lg:px-10 text-white backdrop-blur-[4px] lg:py-26">
            <h1 className="text-3xl lg:text-4xl font-bold">
              foodwagon
            </h1>

            <p className="mt-3 lg:mt-4 text-base lg:text-lg opacity-90">
              {isLogin
                ? "New here? Create an account and start ordering!"
                : "Already have an account? Login to continue!"}
            </p>

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="
                mt-6 lg:mt-8
                px-6 lg:px-8
                py-2.5 lg:py-3
                border-2 border-white
                rounded-lg
                font-semibold
                hover:bg-white hover:text-orange-500
                transition
              "
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
