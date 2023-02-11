import './App.css';
import AuthProvider from './contexts/AuthContext';
import RoutesMain from './routes';

const App = () => {
  return (
    <>
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
    </>
  );
};

export default App;
