import './styles.css';
import IMG from './sample.png';
import CIRCLE from './circle.svg';

export const App = () => {
    return <>
        <h1>init project  - {process.env.NODE_ENV}</h1>
        <img src={IMG} alt="test Img" width="500" height ="500"/>
        <img src={CIRCLE} alt="test Circle" width="500" height="500" />
    </>
}