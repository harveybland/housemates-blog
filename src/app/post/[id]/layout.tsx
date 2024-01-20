import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post",
  description: "...",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
