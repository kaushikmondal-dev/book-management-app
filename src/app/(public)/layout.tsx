import Header from "@/components/Layout/Header";
import { LayoutProps } from "@/lib/types";

const Publiclayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Publiclayout;
