import type { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "../trpc";

export const helloRouter = {
  sayHello: publicProcedure.query(({ ctx }) => {
    return { message: "Hello, world!" };
  }),
} satisfies TRPCRouterRecord;
