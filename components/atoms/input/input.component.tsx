import { primary } from "@/fonts"
import cn from "classnames"
import { useCallback, useState } from "react"
import IconDelete from "./icons/delete.svg"
import styles from "./input.module.css"
import { InputBaseProps } from "./input.types"

export const InputBase = ({
	className,
	children,
	classInput,
	classDel,
	...otherProps
}: InputBaseProps) => {
	const [value, setValue] = useState("")

	const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}, [])

	const handleDelete = useCallback(() => setValue(""), [])

	return (
		<div className={cn(className, styles.wrapper)} {...otherProps}>
			<input
				value={value}
				className={cn(primary.className, styles.input, classInput)}
				onChange={handleChange}
				{...otherProps}
			/>
			{value && (
				<button className={cn(styles.btn, classDel)} onClick={handleDelete}>
					<IconDelete />
				</button>
			)}
		</div>
	)
}
