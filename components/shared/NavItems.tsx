import Link from "next/link";
interface NavItemsProps {
  text: string;
  href: string;
}
const NavItems = ({ text, href }: NavItemsProps) => {
  return (
    <li className="hover:text-secondary transition-all duration-500">
      <Link href={href}>{text}</Link>
    </li>
  );
};
export default NavItems;
