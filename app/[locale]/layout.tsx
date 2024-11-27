import { primary } from "../../fonts"

import { routing } from "@/i18n/routing"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import "normalize.css/normalize.css"
import "../../global/styles.scss"
import { LocaleType } from "../../types/translate"

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params

	if (!routing.locales.includes(locale as LocaleType)) {
		notFound()
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
