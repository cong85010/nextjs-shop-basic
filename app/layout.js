import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Auth from "@/components/Auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trang chủ",
  description: "Sản phẩm chất lượng, giá cả hợp lý",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Auth>{children}</Auth>
        <Toaster />
      </body>
    </html>
  );
}
