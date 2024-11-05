import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  await auth.protect();

  return (
    <main className="flex h-screen items-center justify-center">
      <div>
        <p>Admin App</p>
        <div>
          <UserButton />
        </div>
        <div>
          <OrganizationSwitcher />
        </div>
      </div>
    </main>
  );
}
