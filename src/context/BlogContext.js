import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blog_post':
			return [
				...state,
				{ id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content },
			];
		case 'edit_blog_post':
			return [...state];
		case 'delete_blog_post':
			return state.filter((post) => post.id !== action.payload);
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return (title, content) => {
		dispatch({ type: 'add_blog_post', payload: { title, content } });
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => dispatch({ type: 'delete_blog_post', payload: id });
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);
