import Prompt from './Prompt';

type Props = {
	name: string | any;
	desc: string;
	data: Post[];
	handleEdit: any;
	handleDelete: any;
};

const Profile = ({ name, desc, data, handleEdit, handleDelete }: Props) => {
	return (
		<section className='w-full'>
			<span className='text-2xl font-bold mx-4'>{name}</span>
			<h1 className='text-sm font-normal font-mono mt-3 md:w-1/2 mx-4 whitespace-pre-wrap '>{desc}</h1>
			<div className='mt-10 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3'>
				{data.map((post: Post) => (
					<Prompt
						post={post}
						key={post._id}
						handleTagClick={undefined}
						handleEdit={() => handleEdit && handleEdit(post)}
						handleDelete={() => handleDelete && handleDelete(post)}
					/>
				))}
			</div>
		</section>
	);
};

export default Profile;
