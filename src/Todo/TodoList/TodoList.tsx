import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem';
import TodoListView from './TodoListView';
import { IListItem } from '../interface';

interface IProps {
  list: IListItem[];
  lastItemId: number;
  onOpenInsertSection: () => void;
  onOpenDetailSection: (todo: IListItem) => void;
  onOpenRewriteSection: (todo: IListItem) => void;
  onTodoDelete: (todo: IListItem) => void;
}

const TodoList: React.FC<IProps> = (props) => {
  const { 
    list, 
    lastItemId, 
    onOpenInsertSection, 
    onOpenDetailSection, 
    onOpenRewriteSection, 
    onTodoDelete 
  } = props;

  const todoAdd = (key: number) => (
    <TodoListItem 
      key={key}
      onOpenRewriteSection={onOpenRewriteSection} 
      onTodoDelete={onTodoDelete} 
      onOpenInsertSection={onOpenInsertSection}
    />
  );

  const data = list.length < 1
    ? todoAdd(0)
    : list.map((item, index) => (
      <TodoListItem 
        key={item.id} 
        todo={item} 
        number={index + 1} 
        onOpenDetailSection={onOpenDetailSection}
        onTodoDelete={onTodoDelete} 
        onOpenRewriteSection={onOpenRewriteSection} />
    )).concat(todoAdd(list.length + 1));

  const viewProps = {
    data,
    lastItemId,
  }

  return <TodoListView {...viewProps} />
}

export default TodoList
