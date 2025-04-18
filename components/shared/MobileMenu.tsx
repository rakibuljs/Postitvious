import { navitems } from "@/utils/data";
import NavItems from "./NavItems";

const MobileMenu = () => {
  return (
    <ul className="flex flex-col justify-center items-center mt-2 text-md bg-primary gap-y-3 py-4">
      {navitems.map((item, key) => (
        <NavItems text={item.text} href={item.href} key={key * 9} />
      ))}
    </ul>
  );
};
export default MobileMenu;
