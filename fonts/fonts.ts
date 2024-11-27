import { Heebo, Montserrat } from "next/font/google"

export const primary = Montserrat({
	weight: ["200", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
})

export const secondary = Heebo({
	weight: ["700", "500"],
	subsets: ["latin"],
	display: "swap",
})
