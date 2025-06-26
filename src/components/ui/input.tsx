import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-[#252426]/50 selection:bg-[#71a47f] selection:text-zinc-800 dark:bg-input/30 border-input flex h-9 w-full min-w-0 bg-[#AAEBBB] text-zinc-800 px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-[#AAEBBB]/50 focus-visible:ring-[2px]",
        "aria-invalid:bg-destructive/20 dark:aria-invalid:bg-destructive/40 aria-invalid:border aria-invalid:border-destructive aria-invalid:text-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
