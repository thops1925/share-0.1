import { BURL } from './url';

export const fetchEdit = async (id: any) => {
	const response = await fetch(`${BURL}/api/prompt/${id}`);
	if (!response.ok) {
		throw new Error('failed to fetch');
	}
	return response.json();
};
