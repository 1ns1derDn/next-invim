import { primary } from "@/fonts"
import cn from "classnames"
import { ElementType, ForwardedRef, forwardRef, memo } from "react"
import styles from "./button-icon.module.css"
import { ButtonPropsType } from "./button-icon.types"

const defaultElement = "button"

const ButtonIconComponent = function <E extends ElementType = typeof defaultElement>(
	props: ButtonPropsType<E>,
	ref: ForwardedRef<E>
) {
	const { className, children, tag, isVisible = true, ...otherProps } = props

	const TagName: ElementType = tag || defaultElement

	if (!isVisible) return null

	return (
		<TagName className={cn(styles.button, primary.className, className)} ref={ref} {...otherProps}>
			{children}
		</TagName>
	)
}

export const ButtonIcon = memo(forwardRef(ButtonIconComponent)) as typeof ButtonIconComponent
