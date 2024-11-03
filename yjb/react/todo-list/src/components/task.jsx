import { MdOutlineEdit } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoSaveOutline } from 'react-icons/io5';
import { useState } from 'react';
const Task = ({ task, onDeleteTask, onChangeTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState('');

  const handleEdit = () => {
    setIsEdit(true);
    setEditText(task.title);
  };

  const handleSave = () => {
    setIsEdit(false);
    onChangeTask(task.id, editText);
  };
  return (
    <li>
      <input type='checkbox' />
      {isEdit ? (
        <>
          <input
            type='text'
            value={editText}
            placeholder='edit your task'
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>
            <IoSaveOutline />
          </button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <button onClick={handleEdit}>
            <MdOutlineEdit />
          </button>
        </>
      )}
      <button>
        <AiOutlineDelete onClick={() => onDeleteTask(task.id)} />
      </button>
    </li>
  );
};
export default Task;