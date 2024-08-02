///q-1
const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

///Q-2
const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://invalid-url.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchData();
//Q-3
const axios = require('axios');

async function fetchSequentialData() {
    try {
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Posts:', postsResponse.data);

        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('Users:', usersResponse.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchSequentialData();
//Q-4

const axios = require('axios');

async function fetchParallelData() {
    try {
        const [postsResponse, usersResponse] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/users')
        ]);

        console.log('Posts:', postsResponse.data);
        console.log('Users:', usersResponse.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchParallelData();
//Q-5
const axios = require('axios');

async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error.message);
    }
}

async function fetchComments() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        return response.data;
    } catch (error) {
        console.error('Error fetching comments:', error.message);
    }
}

async function fetchPostsAndComments() {
    try {
        const posts = await fetchPosts();
        console.log('Posts:', posts);

        const comments = await fetchComments();
        console.log('Comments:', comments);
    } catch (error) {
        console.error('Error in chained fetch:', error.message);
    }
}

fetchPostsAndComments();
