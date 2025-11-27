import "@/globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import TopNav from "@/components/layout/TopNav";
import Sidebar from "@/components/layout/Sidebar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-grayBg text-gray-900">
        <ThemeProvider>
          <TopNav />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-4">{children}</main>
          </div>
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
