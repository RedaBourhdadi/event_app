import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import { signOut, useSession, signIn } from "next-auth/react";
import { Button } from "../ui/button";

const MobileNav = (imgg) => {
  const { data: session } = useSession();
  const imggg = imgg["imgg"];
  const isLogo = imggg === "/assets/images/logo.svg";

  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            // src="/assets/images/logo.svg"
            src={imggg}
            alt="logo"
            // width={128}
            // height={38}

            // width={37}
            // height={37}
            width={isLogo ? 128 : 37}
            height={isLogo ? 38 : 37}
            className={isLogo ? "w-36" : "rounded-full"}
          />
          <Separator className="border border-gray-50" />
          <NavItems />
          <Separator className="border border-gray-50" />
          {session?.user ? (
            <Button
              type="button"
              onClick={() => {
                signOut();
              }}
              className="mt-5 w-full black_btn"
            >
              Sign Out
            </Button>
          ) : (
            <></>
          )}
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
