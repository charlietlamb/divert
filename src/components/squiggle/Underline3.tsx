export default function Underline3({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 400"
      className={className}
    >
      <path
        d="M6.726457595825195,373.09417724609375C267.41405359903973,377.27953084309894,528.1016496022542,381.4648844401042,788.7892456054688,385.6502380371094"
        fill="none"
        stroke-width="4"
        stroke='url("#SvgjsLinearGradient1000")'
        stroke-linecap="round"
      ></path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1000">
          <stop stop-color="#3b82f6" offset="0"></stop>
          <stop stop-color="#1d4ed8" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
