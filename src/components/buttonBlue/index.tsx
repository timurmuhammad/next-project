import styles from './button_blue.module.scss'

type Props = {
	text: string
}

export const ButtonBlue: React.FC<Props> = ({ text = '' }) => {
	return <button className={styles.body}><p>{text}</p></button>
}
