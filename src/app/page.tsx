
import { ModeToggle } from "~/components/ui/dark-mode-toggle";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-primary">
      <h1 className="text-5xl tracking-tight sm:text-[5rem]">Hello</h1>
      <ModeToggle />
    </main>
  );
}