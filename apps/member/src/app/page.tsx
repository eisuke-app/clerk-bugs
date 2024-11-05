import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  await auth.protect();

  return (
    <main className="flex h-screen items-center justify-center">
      <div>
        <p>Member App</p>
        <UserButton />
      </div>
    </main>
  );
}
