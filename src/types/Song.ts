import RequestType from './RequestType';

type Song = {
    title: string;
    requestor: string;
    requestorName: string;
    requestType: RequestType;
};

export default Song;
