import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./ui/dark-mode-toggle";
import SignIn from "./ui/signin";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default async function Header() {
  const session = await getServerAuthSession();

  return (
    <nav className="bg-slate-200 dark:bg-slate-900 flex justify-between align-middle mx-auto items-center p-2 px-2 lg:px-8">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session?.user.image ?? undefined} />
            <AvatarFallback>👽</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="space-x-4 flex align-middle">
        <Link href="/">Something</Link>
        <Link href="/">Another</Link>
        <Link href="/">Link</Link>
      </div>
      <div className="space-x-2 flex align-middle">
        <ModeToggle />
        <SignIn session={session} />
      </div>
    </nav>
  )
}
