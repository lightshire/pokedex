import "./globals.css";
import PokeDexBody from "@/components/PokeDexBody";
import GlobalProvider from "@/components/GlobalProvider";

export const metadata = {
  title: "Pokedex",
  description: "Built with NextJS, React Query, and the Pokedex API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-black h-screen flex items-center justify-center py-[48px] px-[24px]`}
      >
        <GlobalProvider>
          <PokeDexBody>{children}</PokeDexBody>
        </GlobalProvider>
      </body>
    </html>
  );
}
