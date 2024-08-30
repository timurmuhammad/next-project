import styles from './terms.module.scss'
import cn from 'classnames'

export default function Security() {
	return <div className={cn(styles.body, '_container main')}>
		<div className="flex flex-col gap-[32px] max-w-[800px] mx-[auto]">
			<h1 className="  text-2xl  text-black">Terms of use</h1>
			<h2 className="text-[20px]  ">
				1.1 Lorem Ipsum Lorem ipsum dolor sit amet
			</h2>
			<p className="text-[20px] font-light">
				Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet
				consectetur. Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor
				sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem
				ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem
				Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet
				consectetur.
			</p>
			<h2 className="text-[20px]">
				1.2 Lorem Ipsum Lorem ipsum dolor sit amet
			</h2>
			<p className="text-[20px] font-light  ">
				Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet
				consectetur. Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor
				sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem
				ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem
				Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet
				consectetur.
			</p>
		</div>
	</div>
}