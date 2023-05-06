import { createServerSideHelpers } from "@trpc/react-query/server";
import { profileRouter } from "~/server/api/routers/profile";
import { prisma } from "~/server/db";
import superjson from "superjson";
import { postsRouter } from "../api/routers/posts";

export const ssgProfile = createServerSideHelpers({
    router: profileRouter,
    ctx: { prisma, userId: null },
    transformer: superjson,
});

export const ssgPosts = createServerSideHelpers({
    router: postsRouter,
    ctx: { prisma, userId: null },
    transformer: superjson,
});
