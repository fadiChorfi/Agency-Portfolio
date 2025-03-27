import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

type SideNavProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
];

const SideNav: React.FC<SideNavProps> = ({ isOpen, setIsOpen }) => {

   const  handleClose =()=>{
        setIsOpen(false);
    }
  return (
    <div className="hidden md:flex lg:flex xl:flex">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <ul className="space-y-2">
                {navigation.map((item, index) => (
                  <li key={index} onClick={()=>handleClose()}>
                    <Link href={item.href}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideNav;
