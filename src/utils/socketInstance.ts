import { connect } from 'socket.io-client';

const socketObj: any = {
    _instance: null,
    get instance() {
        if (!this._instance) {
            this._instance = connect(process.env.REACT_APP_SOCKET_URL ?? '', {
                transports: ['websocket'],
            });
        }

        return this._instance;
    },
};

export default socketObj.instance;
