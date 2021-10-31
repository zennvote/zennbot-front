import SongList from '../SongList';
import './index.scss';

// TODO: Remove
import Song from '../../../types/Song';
import RequestType from '../../../types/RequestType';
const testSongList: Song[] = [
    {
        title: '테스트용 데이터',
        requestor: 'tester',
        requestorName: '테스터',
        requestType: RequestType.ticket,
    },
];
// TODO : Remove

const Content = () => {
    return (
        <div className="main-content-wrapper">
            <div className="main-content-left">left</div>
            <div className="main-content-right">
                <SongList songList={testSongList} />
            </div>
        </div>
    );
};

export default Content;
