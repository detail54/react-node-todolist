import React, { useEffect, useState } from 'react'
import TodoRewriteView from './TodoRewriteView'
import { IListItem } from '../interface';

interface IProps {
  todo: IListItem;
  onTodoRewrite: (todo: IListItem) => void;
}

const TodoRewrite: React.FC<IProps> = (props) => {

  const { todo, onTodoRewrite } = props; 

  const [ rewriteTodo, setRewriteTodo ] = useState({id: 0, title: '', content: ''});

  useEffect(() => {
    setRewriteTodo({...todo});
  }, [todo])

  const onChangeTitle = (text: string) => {
    setRewriteTodo({...rewriteTodo, title: text});
  }

  const onChangeContent = (text: string) => {
    setRewriteTodo({...rewriteTodo, content: text});
  }

  const viewProps = {
    rewriteTodo,
    onChangeTitle,
    onChangeContent,
    onTodoRewrite
  }

  return <TodoRewriteView {...viewProps} />
}

export default TodoRewrite
