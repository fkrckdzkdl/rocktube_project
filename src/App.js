import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
      {/* provider로 감싼 컴포넌트에서 쿼리클라이언트 사용이 가능하다 */}
      <QueryClientProvider client={queryClient}>  
        <Outlet />
      </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
