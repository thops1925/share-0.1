export const fetchAll = async () => {
	const response = await fetch('http://localhost:3000/api/prompt');
	if (!response.ok) {
		throw new Error('failed to fetch');
	}
	return response.json();
};
