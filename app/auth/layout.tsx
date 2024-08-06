import { SparklesCore } from "@/components/ui/aceternity/sparkles"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.5}
          maxSize={1.5}
          particleDensity={50}
          className="h-full w-full"
          particleColor="#737373"
        />
      </div>
      {children}
    </div>
  )
}
