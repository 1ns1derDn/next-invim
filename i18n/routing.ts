import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
	locales: ["ru", "en"],
	defaultLocale: "ru",
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)