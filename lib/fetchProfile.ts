import { BURL } from './url';

export const fetchProfile = async (id: any) => {
	const response = await fetch(`${BURL}/api/users/${id}/posts`);
	if (!response.ok) {
		throw new Error('failed to fetch');
	}
	return response.json();
};
