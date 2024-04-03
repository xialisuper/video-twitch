import {
  currentUser,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

export default async function Action() {
  //  todo  fix this cause it's not working
  const user = await currentUser();

  if (!user) {
    return <SignUpButton>Login In</SignUpButton>;
  } else {
    return (
      <div className="flex flex-row gap-4 items-center text-muted-foreground">
        <Clapperboard className="" />
        <Link href={`/u/${user.username}`} className="flex flex-row gap-2 ">
          <p className="hidden sm:block transition text-primary ">
            {user.username}
          </p>
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    );
  }
}
