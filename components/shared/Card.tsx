"use client";
import QRCodeGenerator from "@/components/shared/QRCodeGenerator";
import { DialogDemo } from "@/components/shared/Dialog";
import React, { useState } from "react";
import StarRating from "./StarRating";

import { IEvent } from "@/models/event";
import { formatDateTime } from "@/lib/utils";
// import { auth } from '@clerk/nextjs'
import { useSession } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { checkRatingExists } from "@/lib/actions/rating.actions";
import { useEffect } from "react";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
  stripeId?: string;
};

const Card = ({ event, hasOrderLink, hidePrice, stripeId }: CardProps) => {
  //   const { sessionClaims } = auth();
  const { data: session } = useSession();
  const [ratingExists, setRatingExists] = useState(false);

  const userId = session?.user.id;

  const isEventCreator = userId === event.organizer._id.toString();

  useEffect(() => {
    const fetchData = async () => {
      const exists = await checkRatingExists(event._id, userId);
      setRatingExists(exists);
    };

    fetchData();
  }, [event._id]);

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />
      {/* IS EVENT CREATOR ... */}

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
              {event.isFree ? "FREE" : `$${event.price}`}
            </span>
            <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
              {event.category.name}
            </p>
          </div>
        )}

        <p className="p-medium-16 p-medium-18 text-grey-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
            {event.title}
          </p>
        </Link>

        <div className=" w-full  ">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.username}
          </p>

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary-500">Order Details</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          )}

          {stripeId ? (
            <div className="content-normal">
              <p className="text-center">
                <QRCodeGenerator width={150} margin={3} text={stripeId} />
              </p>

              {ratingExists ? (
                <p className="text-right">
                  <StarRating
                    initialRating={ratingExists.rating}
                    readOnly={true}
                    classIcon="w-5 h-5"
                  />
                </p>
              ) : (
                // <h1>{ratingExists.rating}</h1>
                <p className="text-right">
                  <DialogDemo id={event} />
                </p>
              )}
            </div>
          ) : // <div>
          // </div>
          null}
        </div>
      </div>
    </div>
  );
};

export default Card;
