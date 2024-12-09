import { Box, Button, InputBase, InputPassword, Paper, Typography } from "@/components/atoms"
import { useCallback } from "react"
import { Controller, useForm } from "react-hook-form"
import styles from "./sign-in.module.css"
export const SignIn = () => {
	const { control, handleSubmit, reset, setValue } = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = useCallback((data) => {
		console.log(data)
		reset()
	}, [])

	const handleOnClear = useCallback(
		(field, value) => () => {
			setValue(field, value)
		},
		[]
	)

	return (
		<Paper className={styles.wrapper}>
			<Typography className={styles.title} variant='h1'>
				АВТОРИЗАЦИЯ
			</Typography>
			<Box as='form' className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					defaultValue=''
					render={({ field }) => (
						<InputBase {...field} placeholder='Email' onClear={handleOnClear("email", "")} />
					)}
					name='email'
				/>
				<Controller
					control={control}
					defaultValue=''
					render={({ field }) => (
						<InputPassword
							{...field}
							placeholder='Пароль'
							onClear={handleOnClear("password", "")}
						/>
					)}
					name='password'
				/>

				<Button className={styles.button} type='submit'>
					Войти
				</Button>
			</Box>
			<Box className={styles.footer}>
				<Typography variant='h1'>Регистрация</Typography>
				<Typography variant='h1'>Восстановить пароль</Typography>
			</Box>
		</Paper>
	)
}
