import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/lOGO.png"
        alt="MatrixInn Solutions"
        width={160}
        height={44}
        className="h-10 w-auto"
        priority
      />
    </div>
  );
}
