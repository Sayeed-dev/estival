import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Welcome to Estival!
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Plan your perfect vacation with our easy-to-use vacation planner.
        </p>
      </div>
    </main>
  );
}
