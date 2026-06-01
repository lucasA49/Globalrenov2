import { useParams } from 'react-router-dom';
import AdminArticleForm from './AdminArticleForm';

export default function AdminArticleEdit() {
  const { id } = useParams();
  return <AdminArticleForm articleId={id} />;
}
