import { studys } from "@/utils/data";
import StudyCard from "../cards/StudyCard";
import CommonHeading from "../shared/CommonHeading";
import Container from "../shared/Container";

const Study = () => {
  return (
    <section className="py-[167px]">
      <Container>
        <CommonHeading
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
        <div className="bg-[#191A23] py-[70px] text-white rounded-[45px] mt-[85px] md:flex justify-center items-center">
          {/* studycard */}
          {studys.map((study, key) => (
            <StudyCard key={key * 1000} title={study.title} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Study;
