import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, [])

    return null;
}

const style = StyleSheet.create({

});

export default ResolveAuthScreen;