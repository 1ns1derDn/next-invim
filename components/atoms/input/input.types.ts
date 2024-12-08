import { InputHTMLAttributes } from "react"

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
	classInput?: string
	classDel?: string
}
