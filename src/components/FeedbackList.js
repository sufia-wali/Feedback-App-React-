import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet!</p>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence >
        {feedback.map((list) => (
          <motion.div key={list.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={list.id} list={list} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
  // return (
  //   <div className='feedback-list'>
  //       {feedback.map((list)=>{
  //         return(
  //           <FeedbackItem  key={list.id} list={list} deleteList={deleteList}/>
  //         )
  //       })}
  //   </div>
  // )
}

export default FeedbackList