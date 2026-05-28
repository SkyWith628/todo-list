import { Lock, Mail } from "lucide-react";

export function LoginPage() {
  return (
    <div className="auth-page">
      <section className="auth-panel">
        <span className="eyebrow">로그인 화면</span>
        <h1>내 일정을 안전하게 이어서 관리하세요.</h1>
        <label>
          이메일
          <span className="field-with-icon">
            <Mail aria-hidden="true" />
            <input type="email" placeholder="name@example.com" />
          </span>
        </label>
        <label>
          비밀번호
          <span className="field-with-icon">
            <Lock aria-hidden="true" />
            <input type="password" placeholder="비밀번호" />
          </span>
        </label>
        <button className="primary-button" type="button">
          로그인
        </button>
      </section>
    </div>
  );
}
