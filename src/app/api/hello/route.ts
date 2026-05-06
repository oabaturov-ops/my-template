export async function GET() {
  return Response.json({
    message: "Привет из API!",
    time: new Date().toLocaleString("ru-RU"),
  });
}