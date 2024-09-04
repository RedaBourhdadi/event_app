"use client";

import { IEvent } from "@/models/event";
// import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import { signOut, useSession, signIn } from "next-auth/react";

import Link from "next/link";
import React from "react";
import Checkout from "./Checkout";
import { Button } from "../ui/button";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { data: session } = useSession();

  //   const { user } = session?.user.id;
  let userId = null;
  if (session && session.user) {
    userId = session.user.id || null;
  }
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer available.
        </p>
      ) : (
        <>
          {userId ? (
            <Checkout event={event} userId={userId} />
          ) : (
            <Button asChild className="button rounded-full" size="lg">
              <Link href="/sign-in">Get Tickets</Link>
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
