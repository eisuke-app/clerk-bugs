import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  await auth.protect();

  return (
    <main className="flex h-screen items-center justify-center">
      <p>Hello World</p>
    </main>
  );
}
