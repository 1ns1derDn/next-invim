import { ButtonIcon } from "@/components"
import { primary } from "@/fonts"
import cn from "classnames"
import { ForwardedRef, forwardRef, memo, useCallback, useEffect, useMemo, useState } from "react"
import IconDelete from "./icons/delete.svg"
import styles from "./input-base.module.css"
import { InputBaseProps, TypeInputValue } from "./input-base.types"

export const InputBaseComponent = (props: InputBaseProps, ref: ForwardedRef<HTMLInputElement>) => {
	const {
		className,
		children,
		classInput,
		classDel,
		defaultValue,
		value,
		type = "text",
		onChange,
		onClear,
		...otherProps
	} = props
	const [inputValue, setInputValue] = useState<TypeInputValue>(value || "")
	const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
		onChange?.(event)
	}, [])

	const handleClear = useCallback(() => {
		setInputValue("")
		onClear?.()
	}, [])

	useEffect(() => {
		setInputValue(value || "")
	}, [value])

	const iconDelete = useMemo(() => <IconDelete />, [])

	return (
		<div className={cn(className, styles.wrapper)} {...otherProps}>
			<input
				autoComplete='off'
				className={cn(primary.className, styles.input, classInput)}
				onChange={handleChange}
				value={inputValue}
				ref={ref}
				type={type}
				{...otherProps}
			/>
			<ButtonIcon
				isVisible={Boolean(value)}
				className={cn(styles.btn, classDel)}
				onClick={handleClear}
				type='button'
			>
				{iconDelete}
			</ButtonIcon>
		</div>
	)
}

export const InputBase = memo(forwardRef(InputBaseComponent)) as typeof InputBaseComponent
