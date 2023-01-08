import {createContext, useState} from 'react';
import FeedbackData from '../data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
  const[feedback, setFeedback] = useState(FeedbackData);
  const[feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit: false
  })
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    const updatedFeedback = [
      ...feedback, newFeedback
    ]
    setFeedback(updatedFeedback);
  }

  const deleteList = (id) => {
    const deleteItem = feedback.filter((i) => i.id !== id);
    setFeedback(deleteItem);
  }
  const editFeedback = (item)=>{
    setFeedbackEdit({item, edit:true})
  }

  const updateFeedback = (id, upitem)=>{
    const updatedItem = feedback.map((i)=>{
      if(i.id===id){
        return{
          ...i,...upitem
        }
      }
      return i;
    })
    setFeedback(updatedItem)
  }

  return <FeedbackContext.Provider value={{
    feedback,
    deleteList,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback
  }}>{children}</FeedbackContext.Provider>
}

export default FeedbackContext