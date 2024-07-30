import Fastify from "fastify";
import fastifyView from "@fastify/view";
import ejs from "ejs";

// Fastify object
const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyView, {
  engine: {
    ejs: ejs,
  },
});

// Home page route
fastify.get("/", async function handler(request, response) {
  return response.view("templates/home.ejs", {
    title: "Homepage",
  });
});

// About page route
fastify.get("/about", async function handler(request, response) {
  return response.view("templates/about.ejs", {
    title: "About",
    description: "Description of about page",
  });
});

// Run the server
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
