'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

const getUpdate = async (id: any) => {
	const res = await fetch(`/api/prompt/${id}`);
	return res.json();
};

const EditPrompt = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const id = searchParams.get('id');

	const [submitting, setIsSubmitting] = useState(false);
	const [post, setPost] = useState({ prompt: '', tag: '' });

	useEffect(() => {
		const getPromptDetails = async () => {
			const data = await getUpdate(id);
			setPost({
				prompt: data.prompt,
				tag: data.tag,
			});
		};

		if (id) getPromptDetails();
	}, [id]);

	const Edit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setIsSubmitting(true);
		if (!id) return alert('Missing PromptId!');

		try {
			const response = await fetch(`/api/prompt/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					prompt: post.prompt,
					tag: post.tag,
				}),
			});
			if (response.ok) return router.push('/');
		} catch (error) {
			console.log(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return <Form type='Save' post={post} setPost={setPost} submitting={submitting} handleSubmit={Edit} />;
};

export default EditPrompt;
