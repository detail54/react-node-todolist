import React from 'react'
import TodoDetailView from './TodoDetailView';
import { IListItem } from '../interface';

interface IProps {
  todo: IListItem;
  onOpenRewriteSection: (todo: any) => void;
}

const TodoDetail: React.FC<IProps> = (props) => {

  const { todo, onOpenRewriteSection } = props;

  const content = todo.content.split(/(?:\r\n|\r|\n)/g).map((content, index) => (
    <span key={index}>{content}<br/></span>
  ));

  return <TodoDetailView todo={todo} content={content} onOpenRewriteSection={onOpenRewriteSection}/>
}

export default TodoDetail
