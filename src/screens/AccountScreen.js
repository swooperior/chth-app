import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
    const {logout} = useContext(AuthContext);
    return(
        <>
            <Spacer>
                <Text h1>Account</Text>
            </Spacer>
            <Spacer>
                <Button title="Log out" onPress={logout} />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;