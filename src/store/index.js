import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import { reducer as AuthRedux } from './AuthRedux';
import { reducer as UserRedux } from './UserRedux';
import { reducer as LabRedux } from './LabRedux';
import { reducer as CartRedux } from './CartRedux';
import { reducer as OtherRedux } from './OtherRedux';
const config = {
    key: 'root',
    storage,
    blacklist: [
    ]
}
export default persistCombineReducers(config, {
    auth: AuthRedux,
    user: UserRedux,
    labs: LabRedux,
    cart: CartRedux,
    other: OtherRedux,
});
