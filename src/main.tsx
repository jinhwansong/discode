import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './styles/globals';
import store from './stores/store';
import Router from './Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </Provider>
  </ThemeProvider>
);
