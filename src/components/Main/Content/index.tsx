import Settings from '../Settings';
import SongList from '../SongList';
import './index.scss';

const Content = () => {
    return (
        <div className="main-content-wrapper">
            <div className="main-content-left">
                <Settings />
            </div>
            <div className="main-content-right">
                <SongList />
            </div>
        </div>
    );
};

export default Content;
