import { connect } from 'react-redux';
import MenuCategories from './MenuCategories';

let mstp = (state) => {
    return {
        womenList: state.menu.womenList,
        menList: state.menu.menList,
        kidsList: state.menu.kidsList,
    }
}

let mdtp = (dispatch) => {
    return {};
}

export default connect(mstp, mdtp)(MenuCategories)
