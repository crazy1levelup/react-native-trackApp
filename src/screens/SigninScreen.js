import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    const { state, signin, clearErrorMEssage } = useContext(AuthContext);
    return (
        <View style={style.container}>
            <NavigationEvents
                onWillBlur={clearErrorMEssage}
            />
            <AuthForm
                headerText="Sign in for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />
            <NavLink
                text="Don't have an account? Create one."
                routeName="Signup"
            />

        </View>
    )
};



SigninScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;