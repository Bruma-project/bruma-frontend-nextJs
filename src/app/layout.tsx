import "./globals.css";

export const metadata = {
  title: "Bruma project",
  description: "Bruma project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
