//import ServiceCard from "../cards/ServiceCard";

import { services } from "@/utils/data";
import ServiceCard from "../cards/ServiceCard";
import CommonHeading from "../shared/CommonHeading";
import Container from "../shared/Container";

const Service = () => {
  return (
    <section className="py-[140px]">
      <Container>
        {/* header */}
        <CommonHeading
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:"
        />
        {/* service card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[85px]">
          {services.map((service, key) => (
            <ServiceCard
              key={key * 5456}
              title={service.title}
              image={service.image}
              bgColor={service.bgColor}
              titleBgColor={service.titleBgColor}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Service;
