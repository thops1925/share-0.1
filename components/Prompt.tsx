type Props = {
	post: {
		prompt: string;
		tag: string;
	};
	handleTagClick: any;
};
const Prompt = ({ post, handleTagClick }: Props) => {
	return <div>{post.prompt}</div>;
};

export default Prompt;
