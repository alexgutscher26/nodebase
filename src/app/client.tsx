/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const client = () => {
  const trpc = useTRPC();

  const { data: users } = useSuspenseQuery(
    trpc.getUsers.queryOptions({ text: "" })
  );

  return <div>Client component: {JSON.stringify(users)}</div>;
};
