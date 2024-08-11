
import Postsdiv from "./components/postsdiv/postsdiv"
import './App.css'
import Firstimg from "./assets/image-juliusomo.png"
import Secondimg from "./assets/image-amyrobson.png"
import Thirdimg from "./assets/image-maxblagun.png"
import Fourthimg from "./assets/image-ramsesmiron.png"
import Inputfield from "./components/inputfield/inputfield"
import Commentwrapper from "./components/commentwrapper/commentwrapper"
import { useState } from "react"
function App() {
const [Arrayofposts,setArray] = useState([
  {uniqueid :1, postname :"amyrobson",PostOwner :"amy",
    postimg: Secondimg,comments:[],
    postcomment:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
,posttime:"2 weeks ago",
  },{
  uniqueid :2,PostOwner :"max",
  postname :"maxblagun",
  postimg: Thirdimg ,comments:[],
  postcomment: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first."
,posttime:"1 week ago"
  },
{ uniqueid :3, postname :"ramsesmiron",
  postimg: Fourthimg,comments:[] ,
  postcomment: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant."
,posttime:"2 days ago",
},{
  uniqueid :4, postname :"juliusomo",PostOwner :"julio",
  postimg: Firstimg,comments:[],
  postcomment:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
,posttime:"1 month ago",
},
])
function addpost(post) {
  const newpostObject = { postcomment:post, uniqueid:Arrayofposts.length +1,comments:[],postimg:Firstimg,postname:"juliusomo",posttime:"2 days ago"};
  const newArrayOfObjects = [...Arrayofposts,newpostObject];
  setArray(newArrayOfObjects);
}
function deletePostFromArray (DeletedPostID){
  console.log(DeletedPostID);
  const NewArrayAfterDelete =Arrayofposts.filter((post) =>{
    return post.uniqueid != DeletedPostID;
  });
  setArray(NewArrayAfterDelete)
}
function addComment (postuniqueid,commentContent){
const newArray = Arrayofposts.map((post)=> {
  if (post.uniqueid ==postuniqueid){
    post.comments.push(commentContent);
  }
  return post;
});
setArray(newArray);
}
  return (
<main>
  {Arrayofposts.map((post) => {
    return(<>
    <Postsdiv 
key ={post.uniqueid}
postimg ={post.postimg}
postname = {post.postname}
posttime ={post.posttime}
postcomment ={post.postcomment}
uniqueid ={post.uniqueid}
PostOwner ={post.PostOwner}
addComment={addComment}
  deletePostFromArray={deletePostFromArray}>
</Postsdiv>
{post.comments.length >0 ? (<Commentwrapper  Comments ={post.comments}></Commentwrapper>) :null}
    </>
)
  })}
  <Inputfield  addpost={addpost}></Inputfield>
</main>
  )
}

export default App
