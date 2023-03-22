import { View, Text, StyleSheet, TouchableOpacity, Alert, Button, TextInput, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import styles from './main_style'
import Slider from '@react-native-community/slider'
import Sub from '../sub_screen/sub_screen'

const Main = ({ navigation }) => {

  const [heightValue, setHeightValue] = useState(0);
  const [weightValue, setWeightValue] = useState(0);
  const [ageValue, setAgeValue] = useState(0);
  const [bmiValue, setBmiValue] = useState(0);
  const [bmiStatus, setBmiStatus] = useState(null);
  const [gender, setGender] = useState('male');
  const [history, setHistory] = useState([]);

  const bmiCal = () => {
    let w = parseFloat(weightValue); 
    let h = parseFloat(heightValue*0.01);
    let bmi = (w / Math.pow(h, 2)).toFixed(2);
    setBmiValue(bmi);

    if (bmi < 16) {
      setBmiStatus('Gầy độ III');
    } else if (bmi >= 16 && bmi < 17) {
      setBmiStatus('Gầy độ II');
    } else if (bmi >= 17 && bmi < 18.5) {
      setBmiStatus('Gầy độ I');
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiStatus('Bình thường');
    } else if (bmi >= 25 && bmi < 30) {
      setBmiStatus('Thừa cân');
    } else if (bmi >= 30 && bmi < 35) {
      setBmiStatus('Béo phì độ I');
    } else if (bmi >= 35 && bmi < 40) {
      setBmiStatus('Béo phì độ II');
    } else if (bmi >= 40) {
      setBmiStatus('Béo phì độ III');
    }

    const item = {
      gender: gender,
      age: ageValue,
      height: heightValue,
      weight: weightValue,
      bmi: bmiValue,
    };

    setHistory([...history, item]);
  };

  const changeGender = (value) => {
    setGender(value);
  };
  
  const minusWeight = () => {
    var temp = weightValue - 1;
    if(temp < 0)
      temp = 0;
    setWeightValue(temp);
  };
  const plusWeight = () => {
    var temp = weightValue + 1
    setWeightValue(temp);
  };
  const minusAge = () => {
    var tempAge = ageValue - 1;
    if(tempAge < 0)
      tempAge = 0;
    setAgeValue(tempAge);
  };
  const plusAge = () => {
    var tempAge = ageValue + 1
    setAgeValue(tempAge);
  };

  const reset = () => {
    setAgeValue(0);
    setHeightValue(0);
    setWeightValue(0);
    setBmiValue(0);
    setBmiStatus(null);
    setHistory([]);
  }

  return (
    //<View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >

      <View style={styles.header}> 
        <Text style={styles.header_text}>BMI Calculator</Text>
      </View>

      <View style={styles.gender_container}>
        <TouchableOpacity 
          style={[
            styles.gender_wrap,
            gender === 'male' ? styles.genderButtonActive : null,
          ]}
          onPress={() => changeGender('male')}
          activeOpacity
        >
          <FontAwesome name='male' style={styles.gender_icon} color='#0096FF' />
          <Text style={styles.gender_text}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.gender_wrap,
            gender === 'female' ? styles.genderButtonActive : null,
          ]}
          onPress={() => changeGender('female')} 
        >
          <FontAwesome name='female' style={styles.gender_icon} color='#FE0096' />
          <Text style={styles.gender_text}>Female</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.height_wrap}>
        <Text style={styles.height_text}>
          Height <Text style={{fontSize:15}}>cm</Text>
        </Text>
        <Text style={styles.height_slider_text}>
          {heightValue}
        </Text>
        <Slider
          style={styles.height_slider}
          maximumValue={250}
          minimumValue={0}
          minimumTrackTintColor="#6200EE"
          maximumTrackTintColor="#fff"
          step={1}
          value={heightValue}
          onValueChange={(heightValue) => setHeightValue(heightValue)}
        />
      </View>
 
      <View style={styles.weight_age_container}>
        <View style={styles.weight_age_wrap}> 
          <Text style={styles.weight_age_text}>
            Weight
            <Text style={{fontSize:15}}> kg</Text>
          </Text>
          <View style={styles.weight_age_number_wrap}>
            <AntDesign name="minuscircle" style={styles.weight_age_icon}
              onPress={() => minusWeight()} />
            <TextInput 
              style={styles.weight_age_number}
              keyboardType= 'numeric'
              defaultValue="0"
              value = {weightValue.toString(10)}
              onChangeText={(weightValue) => setWeightValue(weightValue)}
              maxLength={3}
            />
            <AntDesign name="pluscircle" style={styles.weight_age_icon}
              onPress={() => plusWeight()} />
          </View>
        </View>

        <View style={styles.weight_age_wrap}>
          <Text style={styles.weight_age_text}>Age</Text>
          <View style={styles.weight_age_number_wrap}>
            <AntDesign name="minuscircle" style={styles.weight_age_icon}
              onPress={minusAge} />
            <TextInput 
              style={styles.weight_age_number}
              keyboardType= 'numeric'
              value = {ageValue.toString(10)}
              onChangeText={(ageValue) => setAgeValue(ageValue)}
              maxLength={3}
            />
            <AntDesign name="pluscircle" style={styles.weight_age_icon}
              onPress={() => plusAge()} />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          title="Calculate"
          color='red'
          onPress={() => {
            bmiCal();
            navigation.navigate('Sub',{
              bmiValue: bmiValue,
              bmiStatus: bmiStatus,
              gender: gender,
              history: history,
              age: ageValue,
            });
            // console.log('hihi haha')
          }}
        />
        <Button 
          title="Reset"
          color='blue'
          onPress={() => reset()}
        />
          
      </View>
      </KeyboardAvoidingView>

    //</View>
  )
}

export default Main