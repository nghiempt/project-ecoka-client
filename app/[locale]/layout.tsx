import React from "react";
import ThemeRegistry from "@/theme/theme-registry";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ProvidersContext from "@/context/providers-context";
import { i18nConfig } from "@/i18nConfig";
import { dir } from "i18next";

// Define the type for the Montserrat font
const montserrat = Montserrat({ subsets: ["latin"] });

// Metadata type definition
export const metadata = {
  title: "ECOKA",
  description: "ECOKA",
};

// Function to generate static params
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

// Define the props for RootLayout
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

// RootLayout component with TypeScript
const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { locale },
}) => {
  return (
    <html lang={locale} dir={dir(locale)}>
      <ThemeRegistry>
        <body className={montserrat.className}>
          <ProvidersContext>{children}</ProvidersContext>
        </body>
      </ThemeRegistry>
    </html>
  );
};

export default RootLayout;
