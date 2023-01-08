import React,{useContext} from 'react'
import Card from './shared/Card'
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackItem({list}) {
  const {deleteList, editFeedback} = useContext(FeedbackContext);
  const editHandler = () =>{
    editFeedback(list);
  }
  return (
    <Card>
      <div className="num-display">{list.rating}</div>
      <button className="close" onClick={()=>deleteList(list.id)}>
        <CloseIcon color="purple"/>
      </button>
      <button className='edit' onClick={editHandler} ><EditIcon style={{color:"purple"}}/></button>
      <div className="text-display">{list.text}</div>
    </Card>
  )
}

export default FeedbackItem