import {
    reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux';
import React from 'react';
import AppNavigation from './AppNavigation'

const mapStateToProps = (state) => ({
    state: state.nav,
});
function ReduxNavigation() {
    const AppWithNavigationState = connect(mapStateToProps)(reduxifyNavigator(AppNavigation, "root"));
    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
            <AppWithNavigationState />
        </SafeAreaView>
    )
}
//export default connect(mapStateToProps)(ReduxNavigation)
export default ReduxNavigation