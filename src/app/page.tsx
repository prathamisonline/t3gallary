import Link from "next/link";
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img className="h-44 w-44 object-cover" src={image.url} />
            <div className="">{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
