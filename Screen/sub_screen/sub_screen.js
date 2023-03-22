import { View, Text, StyleSheet, TouchableOpacity, Alert, Button, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import styles from './sub_style';
import { Feather } from '@expo/vector-icons';


const Sub = ({ route, navigation }) => {
    const { bmiValue } = route.params;
    const { bmiStatus } = route.params;
    const {history} = route.params;
    return(
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Feather 
                    name="arrow-left-circle" 
                    style={styles.header_icon}
                    onPress={() => navigation.popToTop()}
                />
                <Text style={styles.header_text}>
                    Your Result: 
                </Text>
            </View>

            <View style={styles.body_wrap}>
                <View style={styles.body}>
                    <Text style={styles.body_bmiStatus}>{bmiStatus}</Text>
                    <Text style={styles.body_bmiNumber}>{bmiValue}</Text>
                </View>
            </View>

            <View style={styles.history_wrap}>
                {history.length > 0 ? (
                    <View style={styles.history}>
                        <Text style={styles.historyTitle}>Calculation history</Text>
                        {history.map((item, index) => (
                            <View style={styles.historyItem} key={index}>
                                <Text style={styles.historyLabel}>
                                    Gender: 
                                    <Text style={styles.historyText}> {item.gender}</Text>
                                </Text>
                                <Text style={styles.historyLabel}>
                                    Age: 
                                    <Text style={styles.historyText}> {item.age}</Text>
                                </Text>
                                <Text style={styles.historyLabel}>
                                    Height:
                                    <Text style={styles.historyText}> {item.height} cm</Text>
                                </Text>
                                <Text style={styles.historyLabel}>
                                    Weight:
                                    <Text style={styles.historyText}> {item.weight} kg</Text>
                                </Text>
                                <Text style={styles.historyLabel}>
                                    BMI:
                                    <Text style={styles.historyText}> {bmiValue}</Text>
                                </Text>
                            </View>
                        ))}
                </View>
                ) : null}
            </View>

        
        </ScrollView>
    )

}

export default Sub;