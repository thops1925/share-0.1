'use client';
import Feed from '@components/Feed';
import { BURL } from '@lib/url';
import logo from '@public/assets/images/thops3.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
const getAll = async () => {
	const res = await fetch(`${BURL}/api/prompt`);
	return res.json();
};

const Home = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getAllData = async () => {
			const postData = await getAll();
			setData(postData);
		};
		getAllData();
	}, []);

	return (
		<section className='flex justify-center  items-center flex-col '>
			<div className=''>
				<Image src={logo} alt='logo' className='blur-0 object-contain' blurDataURL='data:...' placeholder='blur' />
				<h1 className='text-7xl font-bold text-center mt-5 tracking-wider text-gray-800 capitalize '>snippet</h1>
			</div>
			<Feed postData={data} />
		</section>
	);
};
export default Home;
