import React, { useState, useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const LoginScreen = ()=>{
    const { state, login, clearErrorMessage } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={styles.container}>
            <Spacer>
                <Text h2>Log In</Text>
            </Spacer>
            <Spacer>
                <Input 
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    label="Username"
                    value={username}
                    onChangeText={setUsername}
                />
            </Spacer>
            <Spacer>
                <Input 
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    style={styles.input}
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                />
            </Spacer>
            <Spacer>
                <Button title="Log in" onPress={()=>login({username,password})} />
            </Spacer>
            <Text>{state.errorMessage}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
});

export default LoginScreen;