import React from 'react';
import styles from './typography.module.scss';
import cn from 'classnames';

export const Typography = ({ size = 'h2', title = '', text = '' }) => {

	return <div className={cn(styles.body, styles[size])}>
		{React.createElement(
				size, { className: styles.title }, title
		)}
		{text.length > 0 && <p className={styles.text}>{text}</p>}
	</div>
}