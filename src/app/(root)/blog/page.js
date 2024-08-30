'use client'
import styles from './blog.module.scss'
import { Typography } from '@/components/typography'
import { ButtonBorder } from '@/components/buttonBorder';
import { PostSdider } from '@/components/postSdider';
import { media } from '@/types/blogType'
import { PostDetails } from '@/components/postDetails';

export default function Security() {

	return <div className="main _container">
		<div className="text-center">
			<Typography
				size='h1'
				title='Blog and News'
			></Typography>
		</div>




		<div className={styles.body}>
			<div className="flex flex-col gap-[16px]">
				<p className={styles.subtitle}>
					Pinned
				</p>
				<div className={styles.image} />
				<div className="flex gap-[100px]" />
				<p className=" text-[24px]  text-black font-[400]">
					{media[0].title}
				</p>
				<p className="text-[16px] font-light">
					{media[0].text}
				</p>
				<PostDetails
					data={media[0].data}
					viewsAmount={media[0].views}
				></PostDetails>
			</div>
			<div className="flex flex-col gap-[24px]">
				<div className="flex flex-col justify-center      gap-[16px]">
					<p className={styles.subtitle}>
						Popular
					</p>
					<div className={styles.list}>
						<div className="flex flex-col flex-1    gap-[16px]">
							<div className={styles.image} />
							<div className="flex flex-col       gap-[8px]">
								<p className="text-[20px]  text-black font-[400]">
									{media[0].title}
								</p>
								<PostDetails
									data={media[0].data}
									viewsAmount={media[0].views}
								></PostDetails>
							</div>
						</div>
						<div className="flex flex-col flex-1    gap-[16px]">
							<div className={styles.image} />
							<div className="flex flex-col       gap-[8px]">
								<p className="text-[20px]  text-black font-[400]">
									{media[0].title}
								</p>
								<PostDetails
									data={media[0].data}
									viewsAmount={media[0].views}
								></PostDetails>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.list}>
					<div className="flex flex-col flex-1 gap-[16px]">
						<div className={styles.image} />
						<div className="flex flex-col gap-[8px]">
							<p className=" text-[20px]  text-black font-[400]">
								{media[0].title}
							</p>
							<PostDetails
								data={media[0].data}
								viewsAmount={media[0].views}
							></PostDetails>
						</div>
					</div>
					<div className="flex flex-col flex-1    gap-[16px]">
						<div className={styles.image} />
						<div className="flex flex-col       gap-[8px]">
							<p className="text-[20px]  text-black font-[400]">
								{media[0].title}
							</p>
							<PostDetails
								data={media[0].data}
								viewsAmount={media[0].views}
							></PostDetails>
						</div>
					</div>
				</div>
			</div>
		</div>




		<PostSdider></PostSdider>



		<div className={styles.section}>
			<p className={styles.subtitle}>Latest posts</p>

			<div className={styles.posts}>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							{media[0].title}
						</p>
						<PostDetails
							data={media[0].data}
							viewsAmount={media[0].views}
						></PostDetails>
					</div>
				</div>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							{media[0].title}
						</p>
						<PostDetails
							data={media[0].data}
							viewsAmount={media[0].views}
						></PostDetails>
					</div>
				</div>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							{media[0].title}
						</p>
						<PostDetails
							data={media[0].data}
							viewsAmount={media[0].views}
						></PostDetails>
					</div>
				</div>
			</div>




			<div className={styles.posts}>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							{media[0].title}
						</p>
						<PostDetails
							data={media[0].data}
							viewsAmount={media[0].views}
						></PostDetails>
					</div>
				</div>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							{media[0].title}
						</p>
						<PostDetails
							data={media[0].data}
							viewsAmount={media[0].views}
						></PostDetails>
					</div>
				</div>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							{media[0].title}
						</p>
						<PostDetails
							data={media[0].data}
							viewsAmount={media[0].views}
						></PostDetails>
					</div>
				</div>
			</div>



			<div className='max-w-[132px] mx-auto'>
				<ButtonBorder
					text='Load More'
				></ButtonBorder>
			</div>
		</div>




		
		
	</div>
}


