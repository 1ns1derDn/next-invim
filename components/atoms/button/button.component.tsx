import { primary } from "@/fonts"
import cn from "classnames"
import { ElementType, ForwardedRef } from "react"
import styles from "./button.module.css"
import { ButtonPropsType } from "./button.types"

const defaultElement = "button"

export const Button = <E extends ElementType = typeof defaultElement>(
	{ className, children, as, ...otherProps }: ButtonPropsType<E>,
	ref: ForwardedRef<HTMLElement>
) => {
	const TagName: ElementType = as || defaultElement

	return (
		<TagName className={cn(styles.shared, primary.className, className)} ref={ref} {...otherProps}>
			<span>{children}</span>
		</TagName>
	)
}
