'use client';

import Image from 'next/image';

type Props = {
	post: {
		name: string;
		prompt: string;
		tag: string;
		creator: {
			image: string;
		};
	};
	handleTagClick: any;
	handleEdit: any;
	handleDelete: any;
};
const Prompt = ({ post, handleTagClick, handleEdit, handleDelete }: Props) => {
	return (
		<div className='flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit'>
			<div className='flex justify-between items-start gap-5'>
				<div>
					<Image src={post.creator.image} alt={post.name} width={40} height={40} />
				</div>
			</div>
		</div>
	);
};

export default Prompt;
