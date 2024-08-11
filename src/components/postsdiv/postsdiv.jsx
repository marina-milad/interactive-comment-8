import "./postsdiv.css"
import Counterdiv from "../counterdiv/counterdiv"
import Replybtn from "../../assets/icon-reply.svg"
import Julio from "../../assets/image-juliusomo.png"
import { useState } from "react";
function  postsdiv (props){
    const [replyClicked,setReplyClicked]=useState(false);
    const [commentContent,setCommentContent] =useState("");
function deletepost (event){
    props.deletePostFromArray(event.target.id);
}
function SendComment(event){
    const postuniqueid =event.target.getAttribute("mycustomid");
    const passedCommentContent =commentContent;
    props.addComment(postuniqueid,passedCommentContent);
setCommentContent("");
setReplyClicked(false);}
function getLogedInUserName(){
    return "julio";
}
function handleReply(){
    setReplyClicked(true);
}
function handleOnChange(event){
    setCommentContent(event.target.value)
}
    return(
        <>
        <div className="samepost">
            <Counterdiv></Counterdiv>
            <div className="total">
            <div className="infodiv">
                <div className="datadiv">
                <img className="image" src={props.postimg}/>
                <label className="name"> {props.postname} </label>
                <label> {props.posttime} </label>
                </div>
                <div id="parentdiv">
                {props.PostOwner == getLogedInUserName()?(
                        <button className="deletebtn" id={props.uniqueid} onClick={deletepost}>delete</button>
                    ):null}
                <img  id="replyimg"  src={Replybtn}/>
                <button  disabled={replyClicked}  onClick={handleReply} id="replybtn">Reply</button>
                </div>
            </div>
            <p>{props.postcomment}</p>
            </div>
        </div>
         {replyClicked == true ? (
            <div className="replydiv">
            <img  id="profilepage"  src={Julio}/>
            <input  className="inputplace"  value={commentContent} onChange={handleOnChange}></input>
            <button  className="sendbtn" mycustomid ={props.uniqueid} onClick={SendComment}>send</button>
            </div>
        ):null}
        </>
    ) ;
}
export default postsdiv