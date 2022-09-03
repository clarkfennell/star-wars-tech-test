
import { Suspense, useRef } from "react";
import Background from "./components/background/background";
import DataSortManager from "./components/dataFetch/context/dataSortContextManager";
import DataFetch from "./components/dataFetch/dataFetch";

import './App.scss';

const App = () => {
  const animated = useRef(null);
  const wrapper = useRef(null);

  document.addEventListener('animationend', () => {
    wrapper.current.style.opacity = `1.0`;
    animated.current.style.position = `relative`;
  })

  return (
    <Background>
      <DataSortManager>
        <div className="App">
          <h1 className="App_title" ref={animated}>Star Wars</h1>
          <Suspense>
            <div className="wrapper" ref={wrapper}>
              <DataFetch />
            </div>
          </Suspense>
        </div>
      </DataSortManager>
    </Background>
  );
}

export default App;