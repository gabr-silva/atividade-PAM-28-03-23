import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import {Link} from 'expo-router';
import styles from '../estilo';


export default function Cadastro () {
return (
 <View>
<Text>Cadastro de Endereço</Text>
<TextInput
    style={StyleSheet.subtitle}
    placeholder = {'00000-000'}
/>
<TouchableOpacity>
    <Text style={StyleSheet.subtittle}>Buscar Dados</Text>
</TouchableOpacity>
</View>
)

}