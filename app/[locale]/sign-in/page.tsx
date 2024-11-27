import { useTranslations } from "next-intl"

export default function SingIn() {
	const t = useTranslations()
	return <div>{t("title")}</div>
}
