import { InputBase, InputPassword } from "@/components/atoms"

export const SignIn = () => {
	return (
		<div>
			<InputBase placeholder='Email' />
			<InputPassword placeholder='Пароль' />
		</div>
	)
}
