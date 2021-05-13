import {rootSelector} from '../root.util';

export const selectApp = rootSelector(state => state.app)();
