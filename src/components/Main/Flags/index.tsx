import { useCallback, useEffect, useState } from 'react';
import { useSetFreemodeHook } from '../../../hooks/useApi.hooks';
import FlagItem from '../FlagItem';

import './index.scss';

const Flags = () => {
    const useSetFreemode = useSetFreemodeHook();

    const [freemode, setFreemode] = useState<boolean>(false);

    useEffect(() => {
        return () => undefined;
    }, []);

    const handleToggleFreemode = useCallback(() => {
        useSetFreemode(!freemode).then((_) => {
            // TODO: api 실패시 처리를 추가해야함.
            setFreemode(!freemode);
        });
    }, [freemode]);

    return (
        <div className="main-content-settings-flag-wrapper">
            <h2 className="main-content-settings-flag-header">플래그 관리</h2>
            <FlagItem
                title="신청곡 활성화"
                value={false}
                handleClickToggle={() => undefined}
            />
            <FlagItem
                title="골든벨 활성화 (무료 모드)"
                value={freemode}
                handleClickToggle={handleToggleFreemode}
            />
        </div>
    );
};

export default Flags;
