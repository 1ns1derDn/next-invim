import { ComponentPropsWithoutRef, ElementType } from "react"

export type ButtonOwnProps<E extends ElementType = ElementType> = {
	as?: E
}

export type ButtonPropsType<E extends ElementType> = ButtonOwnProps<E> &
	Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps>
