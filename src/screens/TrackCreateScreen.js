import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Map from '../components/Map';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import '../_mockLocation';
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);

    //helper function for callbacks so it doesn't crash the app from to many reruns
    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}

const style = StyleSheet.create({

});

//make use of onFocus which return boolean if we are or not focused on this screen
export default withNavigationFocus(TrackCreateScreen);