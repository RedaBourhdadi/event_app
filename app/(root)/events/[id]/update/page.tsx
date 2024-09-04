// pages/events/[id]/update.tsx
"use client";

import { useEffect, useState } from "react";
import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { useSession } from "next-auth/react";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = ({ params: { id } }: UpdateEventProps) => {
  const { data: session } = useSession();
  const [userId, setUserId] = useState<string | null>(null);
  const [event, setEvent] = useState<any>(null); // Replace 'any' with your event type

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.id) {
        setUserId(session.user.id);
      }

      try {
        const fetchedEvent = await getEventById(id);
        setEvent(fetchedEvent);
      } catch (error) {
        console.error("Error fetching event:", error);
        // Handle error fetching event data (e.g., show error message)
      }
    };

    fetchData();
  }, [id, session]); // Run effect whenever id or session changes

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm
          type="Update"
          event={event}
          eventId={event._id} // Adjust this based on your event structure
          userId={userId}
        />
      </div>
    </>
  );
};

export default UpdateEvent;
