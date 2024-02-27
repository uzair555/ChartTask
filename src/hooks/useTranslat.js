import { useContext } from 'react';
import { LocalizeContext } from 'react-localize-redux';


const useTranslate = () => {

    const context = useContext(LocalizeContext);

    if (!context) {
        throw new Error('useTranslate must be used within a LocalizeProvider')
    }
    
    const { translate } = context;
    
    return translate
};

export default useTranslate;