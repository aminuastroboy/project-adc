import "./globals.css";

export const metadata = {
  title: "Ahmad Rufai Abdulhamid Movement",
  description: "Yola South House of Assembly movement aligned with ADC national platform",
  icons: {
    icon: "/adc-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
