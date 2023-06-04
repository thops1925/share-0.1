export const fetchProfile = async (id: any) => {
	const response = await fetch(`http://localhost:3000/api/users/${id}/posts`);
	return response.json();
};
