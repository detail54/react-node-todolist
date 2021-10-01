import React from 'react'
import { TodoDetailStyles } from './TodoDetail.styles';
import Button from '../../common/Button/Button';
import { IListItem } from '../interface';

interface IProps {
  todo: IListItem;
  content: any;
  onOpenRewriteSection: (todo: any) => void;
} 

const TodoDetailView: React.FC<IProps> = (props) => {

  const { todo, content, onOpenRewriteSection } = props;

  return (
    <TodoDetailStyles.Root>
      <TodoDetailStyles.Header>할 일</TodoDetailStyles.Header>
      <TodoDetailStyles.Title>
        {todo.title}
      </TodoDetailStyles.Title>
      <TodoDetailStyles.Header>내용</TodoDetailStyles.Header>
      <TodoDetailStyles.Content>
        {content}
      </TodoDetailStyles.Content>
      <TodoDetailStyles.Footer>
        <Button onClick={() => onOpenRewriteSection(todo)}>Rewrite</Button>
      </TodoDetailStyles.Footer>
    </TodoDetailStyles.Root>
  )
}

export default TodoDetailView
