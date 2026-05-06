export async function POST(request: Request) {
  const data = await request.json();

  console.log("Новое сообщение:");
  console.log("Имя:", data.name);
  console.log("Email:", data.email);
  console.log("Сообщение:", data.message);

  return Response.json({ success: true, message: "Сообщение получено!" });
}