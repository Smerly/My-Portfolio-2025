export function MunchLogo({
  className,
  fill,
}: {
  className?: string
  fill?: string
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill={fill ?? "#d54e4c"}
      className={className}
      aria-hidden
    >
      <path d="M50,5 a45,45 0 1,0 32,13 a10,10 0 1,1 -14,14 a10,10 0 1,1 -14,14 a10,10 0 1,1 -14,14 A45,45 0 0,0 50,5 Z" />
    </svg>
  )
}
