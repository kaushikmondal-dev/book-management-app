import BookCard from "@/components/Book/BookCard";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/shadcnui/empty";
import prisma from "@/lib/dbClient/prisma";
import { BookX } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Book Management App",
  description: "Home Page Of Book Managemement App",
};

const page = async () => {
  const allBooks = await prisma.book.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  if (allBooks.length === 0) {
    return (
      <section className="flex flex-1 items-center justify-center">
        <Empty>
          <EmptyHeader className="max-w-xl gap-5">
            <div className="bg-muted flex size-28 items-center justify-center rounded-2xl">
              <BookX className="size-16" />
            </div>
            <EmptyTitle className="text-4xl font-bold">
              No books found
            </EmptyTitle>
            <EmptyDescription className="text-xl">
              There are no books yet. Be the first to add one!
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </section>
    );
  } else {
    return (
      <section className="mb-10">
        <div className="mx-auto w-full max-w-7xl px-3 pt-10 sm:px-6">
          <h2 className="mb-6 text-2xl font-semibold">Latest Book :</h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {allBooks.map((item) => (
              <BookCard
                key={item.id}
                book={item}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default page;
