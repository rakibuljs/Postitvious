import Image from "next/image";
import { StaticImageData } from "next/image";
interface ServiceProps {
  title: string;
  image: StaticImageData;
  bgColor: string;
  titleBgColor: string;
}

const ServiceCard = ({ title, image, bgColor, titleBgColor }: ServiceProps) => {
  return (
    <div>
      <div
        className="border border-solid border-dark rounded-[45px] flex justify-between items-center p-[50px] custom-shadow"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex flex-col gap-y-[93px]">
          <h3
            className="text-[30px] font-medium rounded-md pl-2 mx-auto"
            style={{ backgroundColor: titleBgColor }}
          >
            {title}
          </h3>

          <div className="flex gap-x-3">
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20.5"
                cy="20.5"
                r="20.5"
                fill={
                  title === "Social Media Marketing" ||
                  title === "Analytics and Tracking"
                    ? "#FFF"
                    : "#191A23"
                }
              />
              <path
                d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                fill={
                  title === "Social Media Marketing" ||
                  title === "Analytics and Tracking"
                    ? "#000"
                    : "#B9FF66"
                }
              />
            </svg>
            <button
              className={`${
                title === "Analytics and Tracking" ||
                title === "Social Media Marketing"
                  ? "text-white text-xl"
                  : "text-xl text-black"
              }`}
            >
              Learn more
            </button>
          </div>
        </div>
        <div>
          <Image src={image} alt="searvice image" />
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
