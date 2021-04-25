import { Logo } from 'slick-react-ui-components';
import logoIcon from './assets/icons/LogoTitle.svg';
import './app.css';
function App() {
    return (
        <div className='app'>
            <Logo width={580} height={580} logoIcon={logoIcon} />
        </div>
    );
}

export default App;
