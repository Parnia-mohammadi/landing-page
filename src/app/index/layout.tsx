import Header from "@/ui/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>
        <Header />
      </nav>
      {children}
    </section>
  );
}
