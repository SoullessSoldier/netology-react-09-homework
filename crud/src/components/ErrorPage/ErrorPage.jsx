import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Упс!</h1>
      <p>Произошла ошибка.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/">Вернуться на главную</a>
    </div>
  );
}
