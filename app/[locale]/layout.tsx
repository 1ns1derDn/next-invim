import { primary } from "../../fonts"

import { routing } from "@/i18n/routing"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import "normalize.css/normalize.css"
import "../../global/styles.css"
import { LocaleType } from "../../types/translate"

interface LayoutProps {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
	const { locale } = await params

	if (!routing.locales.includes(locale as LocaleType)) {
		return null
	}

	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body className={primary.className}>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
