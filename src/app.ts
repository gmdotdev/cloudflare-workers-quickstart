import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text("Hello, world! I'm Hono on Workers!");
});

export default app;
