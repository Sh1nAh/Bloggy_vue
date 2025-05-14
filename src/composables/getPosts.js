import { ref } from "vue";
import { db } from "../firebase/config";
import { onSnapshot } from "firebase/firestore";

let getPosts = () => {
    let posts=ref([]);
    let error=ref('');
    let loading=ref(true);
    let load=async()=> {
      try {
        // await new Promise((resolve, reject)=>{
        //   setTimeout(resolve, 2000);
        // })

        // let response= await fetch("http://localhost:3000/posts")
        // if(response.status===404) {
        //   throw new Error("not found url");
        // }
        // let datas= await response.json()
        // posts.value=datas;

        // let res=await db.collection("posts").orderBy("created_at", "desc").get()
        // posts.value=res.docs.map((doc)=> {
        //   return {
        //     id:doc.id, 
        //     ...doc.data()
        //   }
        // })

          db.collection("posts")
          .orderBy("created_at", "desc")
          .onSnapshot((snap)=> {
          loading.value=false;
          posts.value=snap.docs.map((doc)=> {
            return {
              id:doc.id,
              ...doc.data()
            }
          })
        })
      }
      catch(err) {
        loading.value=false;
        error.value=err.message;
      }
    }
    return { posts, error, loading, load };
}

export default getPosts;