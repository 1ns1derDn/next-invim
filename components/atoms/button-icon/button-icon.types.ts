import { ComponentProps, ElementType } from "react"

export type ButtonOwnProps<E extends ElementType = ElementType> = {
	tag?: E
	variant?: "primary" | "secondary"
	isVisible?: boolean
}

export type ButtonPropsType<E extends ElementType> = ButtonOwnProps<E> &
	Omit<ComponentProps<E>, keyof ButtonOwnProps>
