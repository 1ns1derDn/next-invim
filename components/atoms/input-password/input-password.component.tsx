import { useCallback, useMemo, useState } from "react"
import { InputBase } from "../input/input.component"
import IconOff from "./icons/off.svg"
import IconOn from "./icons/on.svg"
import styles from "./input-password.module.css"
import { InputBaseProps } from "./input-password.types"

const TEXT = "text"
const PASSWORD = "password"

export const InputPassword = ({ className, children, ...otherProps }: InputBaseProps) => {
	const [showPassword, setShowPassword] = useState(false)

	const handleShowPassword = useCallback(() => setShowPassword((prev) => !prev), [showPassword])

	const isShow = useMemo(() => (showPassword ? TEXT : PASSWORD), [showPassword])

	return (
		<div className={styles.wrapper}>
			<InputBase
				classDel={styles.btnDel}
				classInput={styles.inputPassword}
				type={isShow}
				{...otherProps}
			/>
			<button className={styles.button} onClick={handleShowPassword}>
				{showPassword ? <IconOff /> : <IconOn />}
			</button>
		</div>
	)
}
