"use client";
import Image from "next/image";
import Container from "../shared/Container";
import Logo from "@/public/assets/Logo.png";
import Link from "next/link";
import NavItems from "../shared/NavItems";
import Button from "../shared/Button";
import { navitems } from "@/utils/data";
import { FaBars } from "react-icons/fa6";
import MobileMenu from "../shared/MobileMenu";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="md:py-15 py-10 overflow-hidden">
      <Container>
        <div className="flex justify-between items-center">
          {/* logo */}
          <div>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Logo"
                className="md:w-40 w-30 object-cover"
              />
            </Link>
          </div>
          {/* navitems */}
          <ul className="hidden md:flex items-center gap-x-10 text-black text-xl">
            {navitems.map((item, key) => (
              <NavItems text={item.text} key={key} href={item.href} />
            ))}
            <Link href={""}>
              <Button text="Request a quote" className="bg-white" />
            </Link>
          </ul>
          <div className="md:hidden block">
            {isMenuOpen ? (
              <IoClose size={24} onClick={toggleMenu} />
            ) : (
              <FaBars size={24} onClick={toggleMenu} />
            )}
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <MobileMenu />
          </div>
        )}
      </Container>
    </div>
  );
};
export default Header;
