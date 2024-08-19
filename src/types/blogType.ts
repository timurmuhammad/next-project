
interface postType {
	image: string
	title: string
	data: string
	views: number
}

interface mediaType {
	image: string
	title: string
}

interface pinnedType {
	image: string
	title: string
	text: string
	data: string
	views: number
}

export const pinned = {
	image: '',
	title: '',
	data: '',
	views: 0,
} as pinnedType

export const popular = [
	{
		image: '',
		title: '',
		data: '',
		views: 0,
	},
	{
		image: '',
		title: '',
		data: '',
		views: 0,
	},
	{
		image: '',
		title: '',
		data: '',
		views: 0,
	},
	{
		image: '',
		title: '',
		data: '',
		views: 0,
	},
] as postType []

export const media = [
	{
		image: '',
		title: '1 Lorem Ipsum Lorem ipsum dolor sit amet consectetur. ',
	},
	{
		image: '',
		title: '2 Lorem Ipsum Lorem ipsum dolor sit amet consectetur. ',
	},
	{
		image: '',
		title: '3 Lorem Ipsum Lorem ipsum dolor sit amet consectetur. ',
	},
	{
		image: '',
		title: '4 Lorem Ipsum Lorem ipsum dolor sit amet consectetur. ',
	},
	{
		image: '',
		title: '5 Lorem Ipsum Lorem ipsum dolor sit amet consectetur. ',
	},
	{
		image: '',
		title: '6 Lorem Ipsum Lorem ipsum dolor sit amet consectetur. ',
	}
] as mediaType[]


export const latestPosts = [
	{
		image: '',
		title: '',
		data: '',
		views: 0,
	},
	{
		image: '',
		title: '',
		data: '',
		views: 0,
	},
	{
		image: '',
		title: '',
		data: '',
		views: 0,
	},
	{
		image: '',
		title: '',
		data: '',
		views: 0,
	},
	{
		image: '',
		title: '',
		data: '',
		views: 0,
	},
	{
		image: '',
		title: '',
		data: '',
		views: 0,
	},
] as postType[]