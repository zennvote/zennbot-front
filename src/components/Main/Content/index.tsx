import SongList from '../SongList';
import './index.scss';

const Content = () => {
    return (
        <div className="main-content-wrapper">
            <div className="main-content-left">left</div>
            <div className="main-content-right">
                <SongList />
            </div>
        </div>
    );
};

export default Content;
