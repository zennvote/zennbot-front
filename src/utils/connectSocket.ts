import { connect } from 'socket.io-client';

export default () => {
    const socket = connect(process.env.REACT_APP_SOCKET_URL ?? '', {
        transports: ['websocket'],
    });

    return socket;
};
