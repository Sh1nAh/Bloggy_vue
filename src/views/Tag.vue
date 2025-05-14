<template>
    <div class="tag">
        <div v-if="error">
            {{error}}
        </div>
        <div v-if="filteredPosts.length>0" class="layout">
            <div>
                <PostsList :posts="filteredPosts"></PostsList>
            </div>
            <div>
                <TagCloud :posts="posts"></TagCloud>
            </div>
        </div>
        <div v-else-if="loading">
            <Spinner></Spinner>
        </div>

        <div v-else class="not-found">
            <p>No posts found for "{{ tag }}"</p>
            <router-link class="back" to="/">
                &#129048;
                Back to Home
            </router-link>
        </div>
    </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostsList from '../components/PostsList'
import { computed, watch } from 'vue';
import getPosts from '../composables/getPosts'

export default {
  components: {
    TagCloud,
    Spinner,
    PostsList 
    },
    props: ['tag'],
    setup(props) {
        let { posts, error, loading, load } = getPosts();
        load();

        let filteredPosts = computed(()=> {
            return posts.value.filter((post)=> {
                return post.tags.includes(props.tag);
            })
        })

        return { posts, error, loading, filteredPosts };
    }
}
</script>

<style>
    .tag {
        max-width: 1200px;
        margin: 0 auto;
    }
    .not-found {
        text-align: center;
        color: #999;
        padding: 200px 0;
    }
    .back {
        text-decoration: none;
        background: #ff8800;
        color: white;
        padding: 8px 16px;
        display: inline-block;
    }
</style>