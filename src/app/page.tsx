import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { Client } from "./client";

const Page = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(
    trpc.getUsers.queryOptions({ text: "" }, { trpc: {} })
  );

  return (
    <div className="min-h-screen flex items-center justify-center min-w-screen">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client /> 
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
