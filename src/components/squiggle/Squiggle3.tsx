export default function Squiggle3({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 400"
      className={className}
    >
      <path
        d="M19.28251075744629,368.60986328125C144.39461549123126,369.3572489420573,644.8430344263712,372.34679158528644,769.9551391601562,373.09417724609375"
        fill="none"
        stroke-width="13"
        stroke='url("#SvgjsLinearGradient1003")'
        stroke-linecap="round"
      ></path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1003">
          <stop stop-color="hsl(217.2,91.2%,59.8%)" offset="0"></stop>
          <stop stop-color="hsl(224.3,76.3%,48%)" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
