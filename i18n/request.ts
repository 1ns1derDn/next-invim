import { LocaleType } from "@/types/translate"
import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = (await requestLocale) as LocaleType

	if (!locale || !routing.locales.includes(locale)) {
		locale = routing.defaultLocale
	}

	return {
		locale,
		messages: (await import(`../translation/${locale}.ts`)).default,
	}
})