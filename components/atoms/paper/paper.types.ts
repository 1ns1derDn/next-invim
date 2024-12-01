import { ComponentProps, ElementType, ReactNode } from "react"

export type PaperOwnProps<E extends ElementType = ElementType> = {
	children?: ReactNode
	as?: E
}

export type PaperProps<E extends ElementType> = PaperOwnProps<E> &
	Omit<ComponentProps<E>, keyof PaperOwnProps>
