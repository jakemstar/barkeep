
import { ModeToggle } from "~/components/ui/dark-mode-toggle";

export default function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-5xl">
          Hello
        </h1>
        <ModeToggle />
    </main>
  );
}
