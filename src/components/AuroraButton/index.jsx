import "./styles.css";

export default function AuroraButton({
  children = "Get Started",
  onClick,
  disabled = false,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`aurora-button ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
}
