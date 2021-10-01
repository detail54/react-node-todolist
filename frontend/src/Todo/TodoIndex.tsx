import React, { useEffect, useState } from 'react'
import OpenSection from './OpenSection/OpenSection';
import InitTodoListData from './InitTodoListData';
import TodoInsert from './TodoInsert/TodoInsert';
import TodoDetail from './TodeDetail/TodoDetail';
import TodoRewrite from './TodoRewrite/TodoRewrite';
import TodoIndexView from './TodoIndexView';
import { IListItem } from './interface';

const TodoListIndex: React.FC = () => {

  const [ open, setOpen ] = useState<boolean>(false);
  const [ list, setList ] = useState<IListItem[]>(() => JSON.parse(localStorage.getItem('list') || '') || InitTodoListData);
  const [ osTitle, setOsTilte ] = useState<string>('');
  const [ osBody, setOsBody ] = useState<JSX.Element>(<></>);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const lastItemId: number = list.length < 1 ? 0 : list[list.length - 1].id;

  const onTodoInsert = (todo: IListItem) => {
    setList(list.concat(todo));
  }

  const onOpenInsertSection = () => {
    setOsTilte('Todo Add');
    setOsBody(<TodoInsert onTodoInsert={onTodoInsert} lastItemId={lastItemId} />);
    setOpen(true);
  }

  const onOpenDetailSection = (todo: IListItem) => {
    setOsTilte('Todo Detail');
    setOsBody(<TodoDetail todo={todo} onOpenRewriteSection={onOpenRewriteSection} />);
    setOpen(true);
  }

  const onTodoRewrite = (todo: IListItem) => {
    const listCopy = [...list];
    const index = listCopy.find(listCopy => listCopy.id === todo.id);
    listCopy.splice(index ? index.id - 1 : 0, 1, todo);

    setList([...listCopy]);
    onOpenDetailSection(todo);
  }

  const onOpenRewriteSection = (todo: IListItem) => {
    setOsTilte('Todo Rewrite');
    setOsBody(<TodoRewrite todo={todo} onTodoRewrite={onTodoRewrite}/>);
    setOpen(true);
  }

  const onTodoDelete = (todo: IListItem) => {
    setList(list.filter((list: { id: number; }) => list.id !== todo.id));
  }

  const onCloseSection = () => {
    setOpen(false);
  }

  const openSectionViewProps = {
    osTitle,
    osBody,
    onCloseSection,
  }

  const openSection = open 
  ? <OpenSection {...openSectionViewProps} />
  : '';

  const todoListViewProps = {
    list,
    onOpenRewriteSection,
    onTodoDelete,
    lastItemId,
    onOpenInsertSection,
    onOpenDetailSection,
  }

  const viewProps = {
    todoListViewProps,
    openSection
  }

  return <TodoIndexView {...viewProps} />
}

export default TodoListIndex
