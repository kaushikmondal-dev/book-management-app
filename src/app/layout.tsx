import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { geistMono, geistSans, interHeading } from "@/lib/fonts";
import { LayoutProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import "./globals.css";

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        interHeading.variable,
      )}
      suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem={false}>
          <Header />
          <main className="flex flex-1 flex-col pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
