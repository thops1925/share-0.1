'use client';

import Profile from '@components/Profile';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const MyProfile = () => {
	const { data: session } = useSession();
	const [post, setPostData] = useState([]);
	console.log(post);

	useEffect(() => {
		const fetchPost = async () => {
			const response = await fetch(`/api/users/${session?.user.id}/posts`);
			const data = await response.json();
			setPostData(data);
		};
		if (session?.user.id) fetchPost();
	}, [session]);

	const handleEdit = () => {};
	const handleDelete = async () => {};

	return (
		<div>
			<Profile name='My' desc='Profile Page' data={post} handleEdit={handleEdit} handleDelete={handleDelete} />
		</div>
	);
};

export default MyProfile;
