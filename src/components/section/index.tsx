import styles from './section.module.scss'
import type { PropsWithChildren } from 'react'
import cn from 'classnames'
import Image from 'next/image'

type Props = {
	imageSRC: string,
	width: number,
	height: number,
	previewTop?: boolean,
	rowReverse?: boolean,
}

export function Section({ children,  imageSRC, width, height, previewTop = false, rowReverse = false }: PropsWithChildren<Props>) {
	return <div className={cn(styles.body, {[styles.preview_top]: previewTop}, {[styles.reverse]: rowReverse})}>
	<div className={styles.section_inner}>
		{children}
	</div>
		<div className={styles.image}><Image src={imageSRC} width={width} height={height} alt='img'></Image></div>
	</div>
}
