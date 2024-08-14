import styles from './button.module.scss';

export const Button = ({ text = '' }) => {
	return <button className={styles.body}>{text}</button>
}
