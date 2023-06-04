'use client';

import Profile from '@components/Profile';
import { fetchProfile } from '@lib/fetchProfile';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

const MyProfile = async () => {
	// const router = useRouter();
	const { data: session } = useSession();

	const post = session?.user.id && (await fetchProfile(session?.user.id));

	console.log(post);

	const handleEdit = (post: any) => {
		// router.push(`/update-prompt?id=${post._id}`);
	};
	const handleDelete = async () => {};

	return (
		<div>
			<Profile name='My' desc='Profile Page' data={post} handleEdit={handleEdit} handleDelete={handleDelete} />
		</div>
	);
};

export default MyProfile;
