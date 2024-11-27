import { ElementType, ForwardedRef, forwardRef, memo } from "react"
import { ButtonPropsType } from "./button.types"

const defaultElement = "button"

function Component<E extends ElementType = typeof defaultElement>(
	{ className, children, variant, size, isUpper, as, ...otherProps }: ButtonPropsType<E>,
	ref: ForwardedRef<HTMLElement>
) {
	const TagName: ElementType = as || defaultElement

	return (
		<TagName className={className} ref={ref} {...otherProps}>
			{children}
		</TagName>
	)
}

export const Button = memo(forwardRef(Component)) as <
	E extends ElementType = typeof defaultElement
>(
	props: ButtonPropsType<E>,
	ref?: ForwardedRef<HTMLElement>
) => ReturnType<typeof Component>
