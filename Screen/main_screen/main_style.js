import { StyleSheet } from "react-native";
import color from '../../contain/color'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0A0E21',
      alignItems: 'center',
    },
    header: {
      backgroundColor: color.wrap,
      width: 410,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header_text: {
      fontSize: 35,
      color: color.text,
    },
    gender_container: {
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    gender_wrap: {
      backgroundColor: color.wrap,
      width: 140,
      height: 160,
      marginHorizontal: 25,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    genderButtonActive: {
      borderWidth: 2,
      borderColor: '#fff',
    },
    gender_icon: {
      fontSize: 50,
      padding: 10,
    },
    gender_text: {
      fontSize: color.fontSize,
      color: color.text,
      padding: 10,
    },
    height_wrap: {
      backgroundColor: color.wrap,
      height: 190,
      width: 330,
      alignItems: 'center',
      borderRadius: 20,
    },
    height_text: {
      color: color.text,
      fontSize: color.fontSize,
      paddingVertical: 10,
    },
    height_slider_text: {
      color: color.text,
      fontSize: 30,
      paddingVertical: 10,
    },
    height_slider: {
      width: 300,
      height: 50,
    },
    weight_age_container: {
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    weight_age_wrap: {
      backgroundColor: color.wrap,
      width: 140,
      height: 160,
      //justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      marginHorizontal: 25,
    },
    weight_age_text: {
      color: color.text,
      fontSize: color.fontSize,
    },
    weight_age_number_wrap: {
      height: 50,
      width: '100%',
      marginTop: '25%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    weight_age_icon: {
      color: '#fff',
      fontSize: color.fontSize,
      marginHorizontal: 25,
      fontSize: color.fontSize,
    },
    weight_age_number: {
      color: color.text,
      fontSize: color.fontSize + 4,
    },
    button: {

    },
    footer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
})

export default styles;