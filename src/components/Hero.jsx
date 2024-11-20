import Button from "./Button";
import Devfolio from "../assets/devfolio.svg"
import Dates from "./Dates";
import Piggy from "../assets/piggy.svg"
import Logo from "../assets/logo1.svg"

const Hero = () => {
  return (
    <section className="w-screen h-screen flex flex-row justify-center items-center p-[80px] gap-[120px]">
      <div className="w-full flex flex-col gap-14 justify-center items-center relative">
        <div className="flex flex-col justify-center items-center gap-5">
        <p className="font-angrybirds text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px] xl:text-[172px] leading-[100%]">
          INNERVE 9
        </p>
        <p className="font-angrybirds md:text-[32px]">
            INDIA&apos;S LARGEST STUDENT DRIVEN HACKATHON
          </p>
          <img src={Piggy} alt="piggy" className="hidden md:flex absolute md:top-[10%] md:left-[69.3%]" />
        </div>
        <Button BtnIcon={Devfolio} Label="APPLY WITH DEVFOLIO"/>
          <p className="font-angrybirds md:text-[32px]">
            Coming Soon ...
          </p>
      </div>

      <div>
      <img 
          src={Logo} 
          alt="piggy" 
          className="w-24 h-auto sm:w-32 sm:h-auto md:w-48 md:h-auto lg:w-64 lg:h-96 xl:w-96 xl:h-96 object-contain"
        />

      </div> 
    </section>
  );
};

export default Hero;
