import React from 'react';

import {SafeAreaView, View} from 'react-native';
import RoutesApp from './src/routes/app.routes';
import { CustomParamsContextProvider } from './src/hooks/useCustomParams';

function App(): React.JSX.Element {
  return (
      <CustomParamsContextProvider>
         <RoutesApp />
      </CustomParamsContextProvider>
  )
}

export default App;
