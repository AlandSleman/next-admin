import { ModeToggle } from "@/components/ModeToggle";
import { ThemesSheet } from "@/components/ThemesSheet";
import { cookies } from "next/headers";
import Link from "next/link";

// TODO get server session for the login text
export function SiteHeader() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  // if(token)redirect("/dashboard")
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="lg:container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex  flex-1 items-center justify-between">
          <div className="flex  items-center gap-6"></div>
          <div className="flex items-center justify-center gap-2">
            <ModeToggle />
            <ThemesSheet />
          </div>
        </div>
      </div>
    </header>
  );
}
