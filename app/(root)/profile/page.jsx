"use client";

import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProfilePage = ({ searchParams }) => {
  const { data: session } = useSession();
  const [orderedEvents, setOrderedEvents] = useState([]);
  const [organizedEvents, setOrganizedEvents] = useState([]);
  const [stripeId, setStripeId] = useState([]);
  const [ordersPage, setOrdersPage] = useState(
    Number(searchParams?.ordersPage) || 1
  );
  const [eventsPage, setEventsPage] = useState(
    Number(searchParams?.eventsPage) || 1
  );
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user.id) {
        const userId = session.user.id;
        const ordersData = await getOrdersByUser({ userId, page: ordersPage });
        setOrders(ordersData);
        // setOrderedEvents(ordersData?.data.map((order) => order.event) || []);
        setOrderedEvents(ordersData?.data.map((order) => order.event) || []);
        setStripeId(ordersData?.data.map((order) => order.stripeId) || []);
        console.log("orderedEvents", orderedEvents);
        // setOrderedEvents(ordersData?.data || []);
        // console.log("orders?.stripeIdddd", stripeId);
        // console.log("orders?.stripeId", ordersData.data[0]?.stripeId);

        const organizedEventsData = await getEventsByUser({
          userId,
          page: eventsPage,
        });
        setOrganizedEvents(organizedEventsData?.data || []);
      }
    };
    fetchData();
  }, [session, ordersPage, eventsPage]);

  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={orderedEvents}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="No worries - plenty of exciting events to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
          stripeId={stripeId}
        />
      </section>

      {/* Events Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={organizedEvents}
          emptyTitle="No events have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Events_Organized"
          limit={3}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default ProfilePage;
