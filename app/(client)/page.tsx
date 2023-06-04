import Feed from '@components/Feed';
import { fetchAll } from '@lib/fetchAll';
import logo from '@public/assets/images/thops3.png';
import Image from 'next/image';

const Home = async () => {
	const res: Promise<Post[]> = fetchAll();
	const data = await res;
	return (
		<section className='flex justify-center  items-center flex-col '>
			<div className=''>
				<Image src={logo} alt='logo' className='blur-0 object-contain' />
				<h1 className='text-7xl font-bold text-center mt-5 tracking-wider font-cookie text-gray-800'>Promp</h1>
			</div>
			<Feed data={data} />
		</section>
	);
};
export default Home;
