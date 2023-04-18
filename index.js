import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import {Link} from 'expo-router';
 
export default function Cadastro () {
    return (
        <View>
            <Text>Cadastro de Endereço</Text>
            <TextInput value={'00000-000'} />
            <TouchableOpacity>
                <Text>Buscar Dados</Text>
            </TouchableOpacity>
        </View>
    )
}
