export interface IListItem  {
  id: number;
  title: string;
  content: string;
}

export interface ITodoListViewProps {
  list: IListItem[];
  lastItemId: number;
  onOpenRewriteSection: (todo: any) => void;
  onTodoDelete: (todo: any) => void;
  onOpenInsertSection: () => void;
  onOpenDetailSection: (todo: any) => void;
}
