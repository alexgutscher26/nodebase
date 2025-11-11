"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

/**
 * Renders the Client component displaying user data.
 */
export const Client = () => {
  const trpc = useTRPC();

  const { data: users } = useSuspenseQuery(
    trpc.getUsers.queryOptions({ text: "" })
  );

  return <div>Client component: {JSON.stringify(users)}</div>;
};
