import { ButtonIcon, InputBase } from "@/components"
import { InputBaseProps } from "@/components/atoms/input-base/input-base.types"
import { ForwardedRef, forwardRef, memo, useCallback, useMemo, useState } from "react"
import { PASSWORD, TEXT } from "./constants"
import IconOff from "./icons/off.svg"
import IconOn from "./icons/on.svg"
import styles from "./input-password.module.css"

export const InputPasswordComponent = (
	props: InputBaseProps,
	ref: ForwardedRef<HTMLInputElement>
) => {
	const { className, children, ...otherProps } = props
	const [showPassword, setShowPassword] = useState(false)

	const handleShowPassword = useCallback(() => setShowPassword((prev) => !prev), [showPassword])

	const isShow = useMemo(() => (showPassword ? TEXT : PASSWORD), [showPassword])
	const iconOff = useMemo(() => <IconOff />, [])
	const iconOn = useMemo(() => <IconOn />, [])

	return (
		<div className={styles.wrapper}>
			<InputBase
				ref={ref}
				classDel={styles.btnDel}
				classInput={styles.inputPassword}
				type={isShow}
				{...otherProps}
			/>
			<ButtonIcon className={styles.button} type='button' onClick={handleShowPassword}>
				{showPassword ? iconOff : iconOn}
			</ButtonIcon>
		</div>
	)
}

export const InputPassword = memo(
	forwardRef(InputPasswordComponent)
) as typeof InputPasswordComponent
