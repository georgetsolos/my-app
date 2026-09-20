import { useEffect, useRef, useState } from 'react';
import './AuthDialog.scss';

type Props = {
  open: boolean;
  mode: 'signin' | 'signup';
  onModeChange: (m: 'signin' | 'signup') => void;
  onClose: () => void;
};

export default function AuthDialog({
  open,
  mode,
  onModeChange,
  onClose,
}: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const emailInvalid = touched && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="auth"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <form className="auth__panel" method="dialog">
        <button
          type="button"
          className="auth__close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>

        <div className="auth__tabs" role="tablist">
          <button
            role="tab"
            type="button"
            aria-selected={mode === 'signin'}
            className={`auth__tab${mode === 'signin' ? ' is-active' : ''}`}
            onClick={() => onModeChange('signin')}
          >
            Login
          </button>
          <button
            role="tab"
            type="button"
            aria-selected={mode === 'signup'}
            className={`auth__tab${mode === 'signup' ? ' is-active' : ''}`}
            onClick={() => onModeChange('signup')}
          >
            Register
          </button>
        </div>

        <div className="auth__fields" key={mode}>
          {mode === 'signup' && (
            <label className="field">
              <span className="field__label">Name</span>
              <input
                className="field__input"
                type="text"
                autoComplete="name"
                required
              />
            </label>
          )}

          <label className="field">
            <span className="field__label">Email</span>
            <input
              className="field__input"
              type="email"
              placeholder="e.g. alex@minigames.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(true)}
              aria-invalid={emailInvalid}
              autoComplete="email"
              required
            />
            {emailInvalid && (
              <span className="field__error">
                Please enter a valid email address
              </span>
            )}
          </label>

          <label className="field">
            <span className="field__label">Password</span>
            <input
              className="field__input"
              type="password"
              autoComplete={
                mode === 'signin' ? 'current-password' : 'new-password'
              }
              required
            />
          </label>
        </div>

        <button type="submit" className="btn btn--primary auth__submit">
          {mode === 'signin' ? 'Log In' : 'Sign Up'}
        </button>
      </form>
    </dialog>
  );
}
