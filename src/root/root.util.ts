import {TypedSelector} from '../core/core.model';
import {selector} from '../core/core.util';
import {RootState} from './root.model';

export const rootSelector: TypedSelector<RootState> = selector;
