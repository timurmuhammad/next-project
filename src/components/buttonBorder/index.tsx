import styles from './button_border.module.scss'

type Props = {
	text: string
}

export const ButtonBorder: React.FC<Props> = ({ text }) => {
	return <button className={styles.body}>{text}</button>
}