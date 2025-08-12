import app from '../../app';
import connectToMongoDB from '../database/mongoConnect';

const PORT = process.env.PORT || 3000;

async function start() {
  await connectToMongoDB();
  const server = app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );

  return server;
}

if (process.env.NODE_ENV !== "test") {
  start().catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
}

export { start };