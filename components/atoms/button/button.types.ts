import { ComponentProps, ElementType } from "react"

export type ButtonOwnProps<E extends ElementType = ElementType> = {
	as?: E
	variant?: "primary" | "secondary"
}

export type ButtonPropsType<E extends ElementType> = ButtonOwnProps<E> &
	Omit<ComponentProps<E>, keyof ButtonOwnProps>
