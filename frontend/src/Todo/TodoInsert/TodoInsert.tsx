import React, { useState } from 'react'
import TodoInsertView from './TodoInsertView';
import { IListItem } from '../interface';

interface IProps {
  lastItemId: number;
  onTodoInsert: (todo: any) => void;
}

const TodoInsert: React.FC<IProps> = (props) => {

  const { lastItemId, onTodoInsert } = props;

  const [ todo, setTodo ] = useState<IListItem>({id: 0, title: '', content: ''});

  const onSetTodo = () => {
    if (todo.title !== ''){
      onTodoInsert({...todo, id: lastItemId + 1});
      setTodo({id:0, title: '', content: ''})
    }
  }

  const onChangeTitle = (text: string) => {
    setTodo({...todo, title: text});
  }
  const onChangeContent = (text: string) => {
    setTodo({...todo, content: text});
  }

  const viewProps = {
    title: todo.title,
    content: todo.content,
    onSetTodo,
    onChangeTitle,
    onChangeContent,
  }

  return <TodoInsertView {...viewProps} />
}

export default TodoInsert
