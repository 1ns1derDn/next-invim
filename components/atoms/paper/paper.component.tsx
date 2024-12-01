import classNames from "classnames"
import { ElementType } from "react"
import styles from "./paper.module.css"
import { PaperProps } from "./paper.types"

const defaultElement = "div"

export const Paper = <E extends ElementType = typeof defaultElement>({
	children,
	as,
	className,
	...otherProps
}: PaperProps<E>) => {
	const TagName: ElementType = as || defaultElement

	return (
		<TagName className={classNames(styles.paper)} {...otherProps}>
			{children}
		</TagName>
	)
}
