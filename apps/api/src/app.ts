import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
    .use(cors())
    .get("/", () => "Hi Elysia" as const, {
        response: t.Literal("Hi Elysia"),
    })
    .listen(3000);

export type App = typeof app;
