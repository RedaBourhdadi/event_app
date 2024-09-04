"use client";
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Header = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  let imgg = "";
  session?.user
    ? (imgg = session?.user.image)
    : (imgg = "/assets/images/logo.svg");

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>

        <div>
          <nav className="md:flex-between md:block hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </div>

        <div className=" flex w-32 justify-end gap-3">
          {}
          {session?.user ? (
            <>
              <Menubar className="md:block hidden Menubar1">
                <MenubarMenu>
                  <MenubarTrigger className="align-middle">
                    <Image
                      src={session?.user.image}
                      // src="/assets/icons/menu.svg"
                      width={37}
                      height={37}
                      className="rounded-full cursor-pointer"
                      alt="profile"

                      // onClick={() => setToggleDropdown(!toggleDropdown)}
                    />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <Link
                        href="/profile"
                        className="dropdown_link"
                        // onClick={() => setToggleDropdown(false)}
                      >
                        My Profile
                      </Link>{" "}
                      <MenubarShortcut>
                        <Image
                          src={session?.user.image}
                          // src="/assets/icons/menu.svg"
                          width={27}
                          height={27}
                          className="rounded-full"
                          alt="profile"
                          // onClick={() => setToggleDropdown(!toggleDropdown)}
                        />
                      </MenubarShortcut>
                    </MenubarItem>
                    {/* <MenubarItem>
                      {" "}
                      <Link
                        href="/create-prompt"
                        className="dropdown_link"
                        // onClick={() => setToggleDropdown(false)}
                      >
                        Create Prompt
                      </Link>
                    </MenubarItem> */}
                    <MenubarSeparator />
                    {/* <MenubarItem> */}
                    <Button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="mt-5 w-full black_btn"
                    >
                      Sign Out
                    </Button>
                    {/* </MenubarItem> */}
                    <MenubarSeparator />
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>

              {/* <div>
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                  onClick={() => setToggleDropdown(!toggleDropdown)}
                />

                {toggleDropdown && (
                  <div className="dropdown">
                    <Link
                      href="/profile"
                      className="dropdown_link"
                      onClick={() => setToggleDropdown(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/create-prompt"
                      className="dropdown_link"
                      onClick={() => setToggleDropdown(false)}
                    >
                      Create Prompt
                    </Link>
                    <Button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="mt-5 w-full black_btn"
                    >
                      Sign Out
                    </Button>
                  </div>
                )}
              </div> */}
            </>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <Button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="black_btn"
                  >
                    Sign in
                  </Button>
                ))}
            </>
          )}

          {/* <SignedIn> */}
          {/* <UserButton afterSignOutUrl="/" /> */}
          <MobileNav imgg={imgg} />
          {/* </SignedIn> */}
          {/* <SignedOut> */}
          {/* <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button> */}
          {/* </SignedOut> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
