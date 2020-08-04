import { AppProps } from 'next/app';

import '../styles/global.scss';
import { Provider } from '../redux/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
