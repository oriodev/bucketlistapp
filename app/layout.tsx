import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SupabaseProvider from '@/providers/SupabaseProviders';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'bucket list app',
  description: 'an app for ur bucket list',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SupabaseProvider>
        <Toaster />
      </body>
    </html>
  );
}
