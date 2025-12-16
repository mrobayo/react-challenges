"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Theme as RadixTheme } from "@radix-ui/themes";


export default function Providers({ children }: { children: React.ReactNode }) {
  return <>
     <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
       <RadixTheme>{children}</RadixTheme>
     </ThemeProvider>
  </>;
}