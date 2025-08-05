import app from './infra/server/server';

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

export default app