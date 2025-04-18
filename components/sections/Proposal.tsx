import Link from "next/link";
import Container from "../shared/Container";
import Button from "../shared/Button";
import Image from "next/image";
import ProposalImage from "@/public/assets/ProposalIllustration.png";
const Proposal = () => {
  return (
    <section className="">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center bg-[#F3F3F3] px-[60px] rounded-[45px]">
          {/* left section */}
          <div className="flex flex-col gap-y-6 py-8 lg:py-0">
            <h3 className="lg:text-[30px] text-xl text-black font-medium lg:mt-0 mt-4 ">
              Let’s make things happen
            </h3>
            <p className="lg:text-xl text-md md:max-w-[600px] mx-auto">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Link href={""}>
              <Button
                text="Get your free proposal"
                className="bg-black text-white  px-[35px]"
              />
            </Link>
          </div>
          {/* right section */}
          <div className="hidden lg:block">
            <Image src={ProposalImage} alt="proposal image" />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Proposal;
