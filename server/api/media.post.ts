export default defineEventHandler(async (event) => {
  const { tab } = await readBody(event);

  return tab + " changed";
});
