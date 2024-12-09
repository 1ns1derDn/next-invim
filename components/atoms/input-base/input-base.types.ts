export interface InputBaseProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	classInput?: string
	classDel?: string
	onClear?: () => void
}

export type TypeInputValue = string | number | readonly string[] | undefined
