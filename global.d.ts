import en from "./translation/en"

type Messages = typeof en

declare global {
	interface IntlMessages extends Messages {}
}
