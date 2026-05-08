export async function GET() {
  return Response.json({
    message: "Привет из API!",
    time: new Date().toLocaleString("ru-RU"),
    tasks: [
      { id: 1, text: "Изучить React", done: true },
      { id: 2, text: "Создать сайт", done: false },
      { id: 3, text: "Запустить в интернет", done: false },
    ],
  });
}