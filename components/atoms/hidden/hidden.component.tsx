import { memo } from "react"
import { HiddenProps } from "./hidden.types"

export const Hidden = memo(({ isVisible, children }: HiddenProps) => {
	console.log(isVisible)

	return <>{isVisible ? <>{children}</> : null}</>
})
