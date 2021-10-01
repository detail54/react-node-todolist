import React from 'react'
import { TodoRewriteStyles } from './TodoRewrite.styles';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import TextArea from '../../common/TextArea/TextArea';
import { IListItem } from '../interface';

interface IProps {
  rewriteTodo: IListItem;
  onChangeTitle: (text: string) => void;
  onChangeContent: (text: string) => void;
  onTodoRewrite: (todo: IListItem) => void;
}

const TodoRewriteView: React.FC<IProps> = (props) => {

  const { rewriteTodo, onChangeTitle, onChangeContent, onTodoRewrite } = props;

  return (
    <TodoRewriteStyles.Root>
      <TodoRewriteStyles.Header>할 일</TodoRewriteStyles.Header>
      <TodoRewriteStyles.Title>
        <Input 
          name='title'
          value={rewriteTodo.title} 
          onChange={(event) => onChangeTitle(event.currentTarget.value)} 
        />
      </TodoRewriteStyles.Title>
      <TodoRewriteStyles.Header>내용</TodoRewriteStyles.Header>
      <TodoRewriteStyles.Content>
        <TextArea 
          name='content'
          value={rewriteTodo.content} 
          onChange={(event) => onChangeContent(event.currentTarget.value)} 
        />
      </TodoRewriteStyles.Content>
      <TodoRewriteStyles.Footer>
        <Button onClick={() => onTodoRewrite(rewriteTodo)}>Submit</Button>
      </TodoRewriteStyles.Footer>
    </TodoRewriteStyles.Root>
  )
}

export default TodoRewriteView
