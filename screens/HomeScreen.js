/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import PostCard from '../components/PostCard';
import {Container} from '../styles/FeedStyles';
// import {cos} from 'react-native-reanimated';
// import PostCard from '../components/PostCard';
const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-3.jpg'),
    postTime: '4 mins ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-3.jpg'),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    postTime: '2 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    postTime: '1 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-2.jpg'),
    liked: true,
    likes: '1',
    comments: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    postTime: '1 day ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-4.jpg'),
    liked: true,
    likes: '22',
    comments: '4',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    postTime: '2 days ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '0',
    comments: '0',
  },
];

const HomeScreen = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const list = [];
        await firestore()
          .collection('posts')
          .get()
          .then(querySnapshot => {
            // console.log('Total Posts: ', querySnapshot.size);
            querySnapshot.forEach(doc => {
              const {post, userId, postImg, postTime, likes, comments} =
                doc.data();
              list.push({
                id: doc.id,
                userId,
                userName: 'Test name',
                userImg:
                  'https://firebasestorage.googleapis.com:443/v0/b/rn-social-app-3f8fb.appspot.com/o/photos%2FIMG_00021626147218325.JPG?alt=media&token=38a1da53-1121-4ca5-b68e-ea0e6d219ff5',
                postTime: postTime,
                post,
                postImg,
                liked: false,
                likes,
                comments,
              });
            });
          });

        setPosts(list);
        if (loading) {
          setLoading(false);
        }
        console.log('Post: ', list);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Container>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default HomeScreen;
