<template>
  <div class="home">
    <!-- 1 -->
    <!-- <h1>Home page</h1>
    <p>My name is {{name}}. i am {{age}} years old.</p>
    <input type="text" v-model="name">
    <button @click="handleClick">click</button>
    <button @click="age++">increase age</button> -->

    <!-- 2 -->
    <!-- <h1>Person One</h1>
    <p>{{personOne.name}} - {{personOne.age}}</p>
    <button @click="changeOne">change one</button>
    <h1>Person Two</h1>
    <p>{{personTwo.name}} - {{personTwo.age}}</p>
    <button @click="changeTwo">change two</button> -->

    <!-- 3 -->
    <!-- <h1>userOne: {{userOne}}</h1>
    <button @click="changeOne">change one</button>
    <h2>userTwo: {{userTwo}}</h2>
    <button @click="changeTwo">change two</button> -->

    <!-- 4 -->
    <!-- {{name}} -->

    <!-- 5 -->
    <!-- <input type="text" v-model="search">
    <p>search: {{search}}</p>
    <div v-for="name in filteredNames" :key="name">
      {{name}}
    </div> -->

    <!-- 6 -->
    <!-- <div v-if="showPosts">
      <PostsList :posts="posts"></PostsList>
    </div>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete</button> -->

    <!-- 7 -->
    <div v-if="error">
      {{error}}
    </div>
    <div v-if="posts.length>0" class="layout">
      <div>
        <PostsList :posts="posts"></PostsList>
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else-if="loading">
      <Spinner></Spinner>
    </div>
    <div class="empty" v-else>No posts yet</div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostsList from '../components/PostsList'
import getPosts from '../composables/getPosts'
// import { computed, reactive, ref } from 'vue';

export default {
  components: {
    TagCloud,
    Spinner, 
    PostsList 
  },
  setup() {
    //1
    // // console.log('Hi there');
    // let name = ref('ShinAh');
    // // console.log(name.value);
    // let age=ref(24);
    // let handleClick=()=>{
    //   name.value='No No';
    // }
    // return { name, age, handleClick }

    //2
    // let personOne=ref({
    //   name:'Hak Son',
    //   age:18
    // });
    // let changeOne=()=>{
    //   personOne.value.name='change Hak Son';
    // }
    // let personTwo=reactive({
    //   name:'Yona',
    //   age:24
    // });
    // let changeTwo=()=>{
    //   personTwo.name='change Yona';
    // }
    // return { personOne, changeOne, personTwo, changeTwo };

    //3
    // let userOne=ref("ShinAh");
    // let userTwo=reactive("No No"); //premitive value tway ko reactive lote lo ma ya, object, array pl ya
    // let changeOne=()=>{
    //   userOne.value='change ShinAh';
    // }
    // let changeTwo=()=>{
    //   userTwo='change No No';
    // }
    // return { userOne, userTwo, changeOne, changeTwo };

    //4
    // let name=computed(()=> {
    //   return 'ShinAh';
    // })
    // return { name }

    //5
    // let search=ref('');
    // let names=ref(['ShinAh', 'No No', 'Hak Son','Yona']);
    // let filteredNames=computed(()=> {
    //   return names.value.filter(name=> {
    //     return name.includes(search.value)
    //   })
    // })
    // return { search, names, filteredNames }

    //6
    // let showPosts=ref(true);
    // let posts=ref([
    //   {
    //     id: 1,
    //     title: "post title 1",
    //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse alias voluptatem. Ab expedita nisi ipsum mollitia quos! Numquam labore animi sapiente modi explicabo commodi tenetur, perspiciatis similique aut vel atque laudantium adipisci officiis sed inventore nobis aperiam impedit! Ab, nobis cum ullam pariatur nam vel harum exercitationem eveniet saepe consequatur amet ex nemo provident laboriosam aperiam deserunt hic. Magnam dolor, vero iste id eum reprehenderit voluptate? Cum, repellat provident aperiam maiores quidem nobis! Dolor, incidunt ea. Illum aliquid fuga voluptates ratione modi itaque ab vero voluptas doloremque, delectus rem praesentium facere natus unde, dignissimos cum excepturi laboriosam totam. Qui ducimus sunt laborum explicabo accusamus? Nulla praesentium animi cumque repellat eaque soluta, perferendis, dicta autem, nisi atque culpa. Eos perspiciatis nulla reprehenderit placeat voluptatum ab nesciunt esse saepe voluptatem, ea aut unde. Atque reiciendis tempora quos eum, enim, illum sunt aperiam nihil velit deserunt laudantium voluptatibus. Veritatis expedita impedit vitae quos commodi cum magnam minus obcaecati quidem, illo eius minima labore inventore neque est enim reprehenderit tempore, aperiam quod voluptas! In, aliquam quasi debitis ipsa beatae minima cupiditate ut quas eveniet illum. Harum porro doloremque nobis odit quas animi eligendi hic necessitatibus amet non sint cumque, quisquam, aut repellendus? Atque?"
    //   },
    //   {
    //     id: 2,
    //     title: "post title 2",
    //     body: "lorem ipsum"
    //   }
    // ])
    // return { showPosts, posts }
    
    //7 | composables function
    let { posts, error, loading, load } = getPosts();
    load();
    return { posts, error, loading };

    // destructuring
    // let { name, age} = {
    //   name: 'ShinAh',
    //   age: 24
    // }
  }
}
</script>
<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    /* padding: 10px; */
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
  .empty {
    text-align: center;
    color: #999;
    padding: 200px 0;
  }
</style>