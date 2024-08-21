import styles from './post_details.module.scss'
import Image from 'next/image'
import views from "@/ui/icons/views.svg";

type Props = {
	data: string
	viewsAmount: number
}

export const PostDetails: React.FC<Props> = ({ data, viewsAmount }) => {
	return <div className={styles.body}>
	<p className="text-[14px] font-extralight  text-black">
		{data}
	</p>
	<div className="flex  items-center   gap-[8px]">
		<Image src={views} width={19} height={14} alt='icon'></Image>
		<p className="  text-[14px] font-extralight text-center text-black">
			{viewsAmount}
		</p>
	</div>
</div>
}