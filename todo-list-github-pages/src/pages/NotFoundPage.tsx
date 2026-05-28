import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="not-found">
      <span>404</span>
      <h1>요청한 화면을 찾을 수 없습니다.</h1>
      <Link to="/">오늘 일정으로 돌아가기</Link>
    </div>
  );
}
