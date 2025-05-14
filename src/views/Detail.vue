<template>
    <div class="home">
        <div v-if="post" class="post">
        <h2>{{post.title}}</h2>
        <p class="body">{{post.body}}</p>
        <button class="delete" @click="deletePost">Delete</button>
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { db } from '../firebase/config'

export default {
  components: { Spinner },
    props: ['id'], //this.$route.params.id
    setup(props){
        let route=useRoute(); //this.$route
        // let { post, error, load } = getPost(props.id);
        let { post, error, load } = getPost(route.params.id);
        load();

        let router=useRouter();
        let deletePost=async()=> {
            let id=props.id;
            await db.collection("posts").doc(id).delete();
            router.push("/");
        }

        return { post, error, deletePost };
    }
}
</script>

<style>
    button.delete {
        margin: 30px auto;
    }
    .body {
        white-space: pre-line;
        line-height: 1.5em;
    }
</style>