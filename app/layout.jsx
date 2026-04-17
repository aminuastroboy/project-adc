import "./globals.css";

export const metadata = {
  title: "ADC National Campaign Website",
  description: "ADC National General Platform website for Alhaji Atiku Abubakar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
