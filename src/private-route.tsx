import { useNavigate } from 'react-router-dom';
import { get } from './utils/auth'

export default function PrivateRoute({ children }: any) {
  const auth = get('auth');
  const navigate = useNavigate();

  return auth?.length > 0 ? children : navigate('/signin')
}
