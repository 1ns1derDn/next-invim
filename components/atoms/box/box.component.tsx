import classNames from "classnames"
import { ElementType } from "react"
import { PaperProps } from "./box.types"

const defaultElement = "div"

export const Box = <E extends ElementType = typeof defaultElement>({
	children,
	as,
	className,
	...otherProps
}: PaperProps<E>) => {
	const TagName: ElementType = as || defaultElement

	return (
		<TagName className={classNames(className)} {...otherProps}>
			{children}
		</TagName>
	)
}
