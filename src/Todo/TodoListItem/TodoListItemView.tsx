import React from 'react'
import { TodoListItemStyles } from './TodoListItem.styles';
import { IListItem } from '../interface';

interface IProps {
  todo: IListItem;
  listId: JSX.Element;
  buttonGroup: JSX.Element | "";
  onOpenDetailSection?: (todo: IListItem) => void;
}

const TodoListItemView: React.FC<IProps> = (props) => {

  const { todo, listId, buttonGroup, onOpenDetailSection = () => {} } = props;

  return (
    <TodoListItemStyles.Root>
      <TodoListItemStyles.Todo>
        {listId}
        <TodoListItemStyles.Title>
          <span onClick={() => onOpenDetailSection(todo)}>{todo.title}</span>
        </TodoListItemStyles.Title>
        {buttonGroup}
      </TodoListItemStyles.Todo>
    </TodoListItemStyles.Root>
  )
}

export default TodoListItemView
