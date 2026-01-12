
export default function NotFound() {
  return (
    <div className="main-container flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4 text-purple-100">
        Страница не найдена
      </h2>
      <p className="text-purple-100 mb-8">
        К сожалению, запрашиваемая страница не существует.
      </p>
    </div>
  );
}
