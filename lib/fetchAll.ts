export const fetchAll = async () => {
	const response = await fetch('http://localhost:3000/api/prompt', { next: { revalidate: 60 } });
	return response.json();
};
