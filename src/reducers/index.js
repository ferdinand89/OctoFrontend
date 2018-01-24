import login from './login';
import {combinReducer} from 'redux';

const rootReducer = combinReducer({
    login
});

export default rootReducer;