import styles from './shared.module.css';

export function Button({ children, variant = 'primary', size = 'medium', loading = false, disabled = false, fullWidth = false, type = 'button', ...props }) {
  return <button {...props} type={type} disabled={disabled || loading} className={`${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''}`}>
    {loading ? <><span className={styles.spinner} aria-hidden="true"></span><span>Loading…</span></> : children}
  </button>;
}

export function Input({ label, error, id, ...props }) {
  return <div className={styles.inputWrap}>{label && <label htmlFor={id}>{label}{props.required && <span aria-hidden="true"> *</span>}</label>}
    <input {...props} id={id} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} />
    {error && <p className={styles.inputError} id={`${id}-error`}>{error}</p>}
  </div>;
}

export function Card({ title, children, className = '' }) {
  return <section className={`${styles.card} ${className}`}>{title && <h2>{title}</h2>}{children}</section>;
}

export function Avatar({ name = 'Community member', src, size = 'medium' }) {
  const initials = name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  return src ? <img className={`${styles.avatar} ${styles[size]}`} src={src} alt={`${name}'s avatar`} /> : <span className={`${styles.avatar} ${styles[size]}`} role="img" aria-label={`${name}'s initials`}>{initials}</span>;
}

export function Modal({ title, open, onClose, children }) {
  if (!open) return null;
  return <div className={styles.modalBackdrop} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="shared-modal-title"><div><h2 id="shared-modal-title">{title}</h2><button type="button" onClick={onClose} aria-label="Close dialog">×</button></div>{children}</section>
  </div>;
}
