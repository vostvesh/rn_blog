import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ route }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { addBlogPost } = useContext(Context);

	return (
		<View>
			<Text style={styles.label}>Enter title:</Text>
			<TextInput style={styles.input} value={title} onChangeText={(newText) => setTitle(newText)} />
			<Text style={styles.label}>Enter content:</Text>
			<TextInput style={styles.input} value={content} onChangeText={(newText) => setContent(newText)} />
			<Button title='Add Blog Post' onPress={() => addBlogPost(title, content)} />
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 15,
		padding: 5,
		margin: 5,
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5,
	},
});

export default CreateScreen;
