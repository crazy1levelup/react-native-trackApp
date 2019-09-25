import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signin, clearErrorMEssage } = useContext(AuthContext);


    return (
        <View style={style.container}>
            <NavigationEvents
                onWillBlur={clearErrorMEssage}
            />
            <AuthForm
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signin}
            />
            <NavLink
                text="Already have an account? Sign in."
                routeName="Signin"
            />

        </View>
    )
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;