import { helloRouter } from "./router/hello";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: helloRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
