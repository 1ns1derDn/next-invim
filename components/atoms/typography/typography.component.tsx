import { ElementType, memo } from "react"

import cn from "classnames"
import styles from "./typography.module.css"
import { TypographyProps } from "./typography.types"
const defaultElement = "div"

export const Typography = memo(
	<E extends ElementType = typeof defaultElement>({
		children,
		as,
		className,
		variant = "text1",
		...otherProps
	}: TypographyProps<E>) => {
		const TagName: ElementType = as || defaultElement

		return (
			<TagName className={cn(className, styles[variant])} {...otherProps}>
				{children}
			</TagName>
		)
	}
)
