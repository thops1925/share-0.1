export const fetchEdit = async (id: any) => {
	const response = await fetch(`http://localhost:3000/api/prompt/${id}`);
	if (!response.ok) {
		throw new Error('failed to fetch');
	}
	return response.json();
};
