## This code has been modified to include Chakra UI and Clerk authentication.
## To deploy on Vercel it is necessary to learn how to add environment keys. Then you must paste in your Clerk secret keys.
## You must first:

```bash
npm create-next-app@latest
```
Follow this set up:
```bash
✔ What is your project named? project-namehere
✔ Would you like to use TypeScript? "No"
✔ Would you like to use ESLint? "Yes"
✔ Would you like to use Tailwind CSS? "No"
✔ Would you like to use `src/` directory? "Yes"
✔ Would you like to use App Router? (recommended) "No"
✔ Would you like to customize the default import alias? "No"
```
Move into your project directory in the terminal.

Now we need to install both dependencies:
```bash
npm i @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion

npm install @clerk/nextjs
```

Now copy the contents of this GitHub repo into your new repository.

Be sure to edit the readme and remove the license if appropriate.

## Below is the copy of the Nextjs default readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.