export default function Underline({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 400"
      className={className}
    >
      <path
        d="M17.937219619750977,366.8161315917969C17.937219619750977,366.8161315917969,782.9596557617188,386.5470886230469,782.9596557617188,386.5470886230469"
        fill="none"
        stroke-width="10"
        stroke='url("#SvgjsLinearGradient1001")'
        stroke-linecap="round"
        stroke-dasharray="0 0"
      ></path>
      <defs>
        <linearGradient
          id="SvgjsLinearGradient1001"
          gradientTransform="rotate(0, 0.5, 0.5)"
        >
          <stop stop-color="#2196f3" offset="0"></stop>
          <stop stop-color="#1976d2" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
