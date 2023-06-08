'use client';
import React, { useEffect, useState } from 'react';
import Prompt from './Prompt';

const PromptList = ({ data, handleTagClick }: { data: Post[]; handleTagClick: any }) => {
	return (
		<div className='mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3'>
			{data.map((post: Post) => (
				<Prompt post={post} key={post._id} handleTagClick={handleTagClick} handleEdit={undefined} handleDelete={undefined} />
			))}
		</div>
	);
};

const Feed = ({ postData }: { postData: Post[] }) => {
	const [searchText, setSearchText] = useState('');
	const handleSearch = (e: { target: { value: React.SetStateAction<string> } }) => {
		setSearchText(e.target.value);
	};
	useEffect(() => {}, []);

	return (
		<section className=' mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2'>
			<form className='relative w-full flex justify-center items-center'>
				<input
					type='text'
					placeholder='Search'
					value={searchText}
					onChange={handleSearch}
					required
					className='block w-full rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0'
				/>
			</form>
			<PromptList data={postData} handleTagClick={() => {}} />
		</section>
	);
};

export default Feed;
