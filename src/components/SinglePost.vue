<template>
    <div class="post">
        <router-link :to="{name: 'detail', params: {id: post.id}}">
            <h2>{{post.title}}</h2>
        </router-link>
        <p>{{cutPostBody}}</p>
        <div v-for="tag in post.tags" :key="tag" class="pill">
           <router-link :to="{name: 'tag', params: {tag}}">{{tag}}</router-link>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['post'],

    setup(props) {
        let cutPostBody=computed(()=> {
            return props.post.body.substring(0,100)+"...";
        })
        return {cutPostBody}
    }
}
</script>

<style>
    .post {
        margin: 0 40px 30px;
        padding-bottom: 30px;
        border-bottom: 1px dashed #e7e7e7;
    }
    .post h2 {
        display: inline-block;
        position: relative;
        font-size: 26px;
        color: white;
        margin-bottom: 10px;
        max-width: 400px;
    }
    .post h2::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #ff8800;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        transform: rotateZ(-1.5deg);
    }
</style>