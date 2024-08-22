import styles from './button_blue.module.scss'

type Props = {
	text: string
}

export const ButtonBlue: React.FC<Props> = ({ text = '' }) => {
	return <button type='submit' className={styles.text}>{text}</button>
}
