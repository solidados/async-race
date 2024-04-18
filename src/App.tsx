import Header from './components/header/Header.tsx';
import Main from './components/main/Main.tsx';
import PageContextProvider from './modules/helpers/context/PageContextProvider.tsx';

function App() {
  return (
    <>
      <PageContextProvider>
        <Header />
        <Main />
      </PageContextProvider>
    </>
  );
}

export default App;
