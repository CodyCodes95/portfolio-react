import './App.css';
import styledComponents from 'styled-components';
import tw from 'twin.macro';
import HomePage from './containers/HomePage/HomePage';

const AppContainer = styledComponents.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    background-color[#333533]
  `}
`;

function App() {
  return (
    <AppContainer>
        <HomePage />
    </AppContainer>
  );
}

export default App;
