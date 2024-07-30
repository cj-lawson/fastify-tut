import Fastify from "fastify";

// Fastify object
const fastify = Fastify({
  logger: true,
});

// Declare route for home and about
fastify.get("/", async function handler(request, response) {
  return { some_variable: "some value" };
});

fastify.get("/about", async function handler(request, response) {
  return { info: "Awesome info saved here" };
});

// Run the server
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
