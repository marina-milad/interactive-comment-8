import './commentwrapper.css'
import Julio from "../../assets/image-juliusomo.png"
import editimg from "../../assets/icon-edit.svg"
import Counterdiv from '../counterdiv/counterdiv'
function commentwrapper(props) {
    return (
        <>
        {props.Comments.map((comment) => {
            return (
                <div className='replydiv' >
                    <Counterdiv></Counterdiv>
                    <div id='motherdiv'>
                    <div className='datapart'>
                        <div className='datadiv'>
                        <img  id="profilepage"  src={Julio}/>
                        <label className='name'>Juliusomo</label>
                        <label>now</label>
                        </div>
                <div> <img src={editimg}/>
                <button id='editbtn'>Edit</button></div>
                </div>
                    <p id='replycomment'>
                        {comment}
                    </p>
                    </div>
            
                </div>
            );
        })}
        </>
    )
}
export default commentwrapper