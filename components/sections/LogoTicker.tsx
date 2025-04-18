import { logoticker } from "@/utils/data";
import Container from "../shared/Container";
import Link from "next/link";
import Image from "next/image";

const LogoTicker = () => {
  return (
    <section className="py-[70px]">
      <Container>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 flex-wrap justify-between">
          {logoticker.map((item, key) => (
            <Link href={item.link} key={key * 4754}>
              <Image src={item.logo} alt="logo" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default LogoTicker;
