'use client';

import Profile from '@components/Profile';
import { BURL } from '@lib/url';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

const getProfile = async (id: any) => {
	const res = await fetch(`${BURL}/api/users/${id}/posts`);
	return res.json();
};

const MyProfile = () => {
	const { data: session } = useSession();
	const router = useRouter();
	const [post, setPost] = useState([]);
	const rev = post.reverse();

	useEffect(() => {
		const fetchProfile = async () => {
			const data = await getProfile(session?.user.id);
			setPost(data);
		};
		if (session?.user.id) fetchProfile();
	}, [session?.user.id]);

	const handleEdit = (post: Post) => {
		router.push(`/update-prompt?id=${post._id}`);
	};
	const handleDelete = async () => {};

	return (
		<div>
			<Profile name='My' desc='Profile Page' data={rev} handleEdit={handleEdit} handleDelete={handleDelete} />
		</div>
	);
};

export default MyProfile;
