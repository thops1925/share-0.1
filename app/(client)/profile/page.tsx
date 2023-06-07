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

	useEffect(() => {
		const controller = new AbortController();
		const fetchProfile = async () => {
			const data = await getProfile(session?.user.id);
			setPost(data.reverse());
		};
		if (session?.user.id) fetchProfile();

		return () => {
			// cancel the request before component unmounts
			controller.abort();
		};
	}, [session?.user.id]);

	const handleEdit = (post: Post) => {
		router.push(`/update-prompt?id=${post._id}`);
	};
	const handleDelete = async (post: Post) => {
		const hasConfirm = confirm('are you sure?');
		if (hasConfirm) {
			try {
				await fetch(`/api/prompt/${post._id.toString()}`, {
					method: 'DELETE',
				});
				const filterPost = post.filter((p: Post) => p._id !== post._id);
				setPost(filterPost);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div>
			<Profile name='My' desc='Profile Page' data={post} handleEdit={handleEdit} handleDelete={handleDelete} />
		</div>
	);
};

export default MyProfile;
