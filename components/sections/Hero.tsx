import Image from "next/image";
import Container from "../shared/Container";
import Illustration from "@/public/assets/Illustration.png";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <section className="py-[70px]">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between gap-y-[80px] md:gap-y-0">
          {/* left section */}
          <div className="flex flex-col gap-y-[35px]">
            <h1 className="text-4xl  text-black font-medium md:text-[60px] md:max-w-[531px] md:leading-[80px]">
              Navigating the digital landscape for success
            </h1>
            <p className="text-black md:text-xl text-lg md:max-w-[498px]">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button
              text="Book a consultation"
              className="bg-dark text-white hover:text-dark md:w-fit"
            />
          </div>
          {/* right section */}
          <div>
            <Image src={Illustration} alt="Illustration" />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
