import React from 'react'


const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className="flex items-center my-3 gap-2  ">

      <div onClick={()=> toggle(id)} className="flex items-center gap-2 my-1 cursor-pointer ">
        <img
          className="w-5 cursor-pointer"
          src="/assets/tick_icons.png"
          alt=""
        />
        <p className="text-slate-700 text-[17px] "> {text} </p>
      </div>
      <img onClick={() => (deleteTodo(id))} className='w-8 mt-1' src="/assets/delete_icon.png" alt="" />
    </div>
  );
}

export default TodoItems
