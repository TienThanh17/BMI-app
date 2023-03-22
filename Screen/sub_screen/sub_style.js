import { StyleSheet } from "react-native";
import color from '../../contain/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0E21'
    },
    header: {
        justifyContent: 'center',
        margin: 20,
    },
    header_text: {
        fontSize: 36,
        color: '#fff',
        fontWeight: 'bold',
    },
    header_icon: {
        fontSize: 36,
        color: '#fff'
    },
    body_wrap: {
        alignItems: 'center',
        marginVertical: 20,
    },
    body: {
        width: 380,
        height: 300,
        backgroundColor: color.wrap,
        borderRadius: 30,
        alignItems: 'center',
    },
    body_bmiStatus: {
        color: '#09FF7A',
        fontSize: 36,
        fontWeight: 700,
        marginTop: 20,
    },
    body_bmiNumber: {
        color: '#fff',
        fontSize: 80,
        fontWeight: 700,
        marginTop: 40,
    },
    history_wrap: {
        alignItems: 'center',
    },
    history: {
        width: 380,
        borderRadius: 30,
        backgroundColor: color.wrap,
        
      },
      historyTitle: {
        fontSize: color.fontSize,
        fontWeight: 'bold',
        margin: 15,
        textAlign: 'center',
        color: color.text,
      },
      historyItem: {
        marginVertical: 10,
        marginHorizontal: 30,
        borderWidth: 1,
        borderColor: '#ccc'
      },
      historyLabel: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: color.text,
      },
      historyText: {
        fontSize: 20,
        marginBottom: 5,
        color: color.text,
        fontWeight: '300',
      },
})

export default styles;