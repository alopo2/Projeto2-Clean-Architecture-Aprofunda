import  app, { PORT } from './infra/server/server';

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app