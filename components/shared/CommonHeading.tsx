interface CommonHeading {
  title: string;
  description: string;
}

const CommonHeading = ({ title, description }: CommonHeading) => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <h2 className="text-[40px] bg-primary text-black font-medium px-2 py-1">
        {title}
      </h2>
      <p className="max-w-[580px] text-lg text-black">{description}</p>
    </div>
  );
};
export default CommonHeading;
