import React, { useContext } from 'react';
import {Text,View, StyleSheet, FlatList, TouchableOpacity} from'react-native';
import { ListItem} from 'react-native-elements';
import {Context as TrackContext} from '../context/TrackContext';
import {NavigationEvents} from 'react-navigation';

const TrackListScreen = ({navigation}) => {
    const {state, fetchTrack} = useContext(TrackContext);
    return (
        <>
        <NavigationEvents onWillFocus={fetchTrack} />
        <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
            return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id})}>
                <ListItem chevron={true} title={item.name}/>
            </TouchableOpacity>
        }}
        />
        </>
    )
};

//add header text
TrackListScreen.navigationOptions ={
    title: "Tracks"
}

const style = StyleSheet.create({

});

export default TrackListScreen;