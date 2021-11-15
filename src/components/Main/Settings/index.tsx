import Flags from '../Flags';
import Managers from '../Managers';
import './index.scss';

const Settings = () => {
    return (
        <div className="main-content-settings-wrapper">
            <h1 className="main-content-settings-header">환경 설정</h1>
            <Flags />
            <Managers />
        </div>
    );
};

export default Settings;
