import Prompt from './Prompt';

type Props = {
	name: string;
	desc: string;
	data: any;
	handleEdit: any;
	handleDelete: any;
};

const Profile = ({ name, desc, data, handleEdit, handleDelete }: Props) => {
	const rev = data.reverse();
	return (
		<section className='w-full'>
			<span>{name} Profile</span>
			<h1>{desc}</h1>
			<div className='mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3'>
				{rev.map((post: any) => (
					<Prompt post={post} key={post._id} handleTagClick={undefined} handleEdit={handleEdit} handleDelete={handleDelete} />
				))}
			</div>
		</section>
	);
};

export default Profile;
