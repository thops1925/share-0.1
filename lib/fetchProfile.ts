export const fetchProfile = async (id: any) => {
	const response = await fetch(`http://localhost:3000/api/users/${id}/posts`);
	if (!response.ok) {
		throw new Error('failed to fetch');
	}
	return response.json();
};
