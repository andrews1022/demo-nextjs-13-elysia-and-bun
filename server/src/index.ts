import { Elysia } from "elysia";

const app = new Elysia();
const port = process.env.PORT || 8080;

app.get("/", () => ({ message: "GET from Elysia!" }));

app.listen(port, () => {
  console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
});
