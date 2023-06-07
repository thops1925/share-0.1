'use client';
import Feed from '@components/Feed';
import { BURL } from '@lib/url';
import logo from '@public/assets/images/thops3.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Controller } from 'swiper';

const getAll = async () => {
	const res = await fetch(`${BURL}/api/prompt`, { next: { revalidate: 30 } });
	return res.json();
};

const Home = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		const getAllData = async () => {
			const postData = await getAll();
			const rev = postData.reverse();
			setData(rev);
		};
		getAllData();
		return () => {
			// cancel the request before component unmounts
			controller.abort();
		};
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
