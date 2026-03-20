import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="min-h-screen bg-white px-4 py-10 text-black">
      <div className="mx-auto max-w-5xl">{children}</div>
    </main>
  );
}