import { ComponentProps, ElementType, ReactNode } from "react"

export type TypographyOwnProps<E extends ElementType = ElementType> = {
	children?: ReactNode
	as?: E
	variant?: "h1" | "h2" | "h4" | "text1"
}

export type TypographyProps<E extends ElementType> = TypographyOwnProps<E> &
	Omit<ComponentProps<E>, keyof TypographyOwnProps>
