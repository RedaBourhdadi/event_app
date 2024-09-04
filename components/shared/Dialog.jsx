"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { createRating } from "@/lib/actions/rating.actions";

useEffect;

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StarRating from "./StarRating";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export function DialogDemo(event) {
  const [rating, setRating] = useState(0);
  const { data: session } = useSession();

  const userId = session?.user.id;

  //# get id from user

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Rating</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white ">
        <DialogHeader>
          <DialogTitle>Rating The Event</DialogTitle>
          <DialogDescription className="text-center	">
            <StarRating
              initialRating={rating}
              onRatingChange={(value) => setRating(value)}
              classIcon="iconn"
            />
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          {/* {!ratingExists && (
           
          )} */}

          <Button
            type="submit"
            // onclick={() => console.log(rating, " bla lbla  ", id)}
            onClick={() => {
              // console.log("event", event.id._id);
              // console.log("organizer", event.id.organizer._id);

              const newRating = createRating({
                userId: userId,
                eventId: event.id._id,
                rating: rating,
                organizer: event.id.organizer._id,
              });
              window.location.reload();
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
