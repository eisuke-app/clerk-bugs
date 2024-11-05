# Clerk Bug

## About this project

This project consists of two Next.js apps: one for admin and one for members. Both apps use Clerk for authentication and share the same Clerk project.

## Bugs / Feature Request

Currently, there's no explicit guidance on using a single Clerk project across multiple apps. Consider an organization-based application with separate admin and member apps, each hosted on different subdomains (`admin.example.com` and `member.example.com`).

During development, you might use separate ports for [localhost](http://localhost) (`3000` for [`member.example.com`](http://member.example.com) and `3001` for `admin.example.com`). In this setup, the organization invite flow doesn't function properly (see the bug reproduction section for details).

## How to start the project

1. On the Clerk dashboard, create a new project (enable email authentication with password disabled).
2. On the Clerk dashboard, go to Configure > Path > Component paths > SignIn. Check `Sign-in page on development host`. Repeat this step for SignUp.
3. Create a `.env` file at the project root and copy the contents of `.env.example` into it. Obtain `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` from the newly-created Clerk project and add them to the `.env` file.
4. Run `pnpm install` to install the dependencies.
5. Run `pnpm dev` to start the development server for all apps. This will launch the member app on port 3000 and the admin app on port 3001.

## How to reproduce the bug

1. Sign up as a member at localhost:3000/sign-up (User A)
2. Sign up as an admin at localhost:3001/sign-up (User B)
3. From localhost:3001, create a new organization
4. From localhost:3001, invite User A to the newly created organization
5. Click the link in the invitation email sent to User A
6. Verify that localhost:3001 opens instead of localhost:3000.
   - Expectation: The URL attached to the invitation link should be configurable.
7. On localhost:3001, navigate to the organization profile. Confirm that the invited user is not listed among the members.
