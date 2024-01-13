import Header from "@/components/Headers";
import "@/styles/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Header  />
        {children}
      </body>
    </html>
  );
}
