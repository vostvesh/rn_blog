import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((post) => post.id === route.params.id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(route.params.id, title, content, () =>
          navigation.navigate("Index")
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
