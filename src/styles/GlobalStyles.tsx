import { StyleSheet} from 'react-native';
import { mycolours } from './colours';

export const styles = StyleSheet.create({
    btnBlue:{
      width : 80,
      height:80,
      borderRadius: 24,
      backgroundColor: mycolours.blue,
      justifyContent: "center",
      alignItems : "center",
      margin:8,
    },
    btnDark:{
    width : 80,
    height:80,
    borderRadius: 24,
    backgroundColor: mycolours.btnDark,
    justifyContent: "center",
    alignItems : "center",
    margin:8,
    },
    btnLight:{
    width : 80,
    height:80,
    borderRadius: 24,
    backgroundColor: mycolours.white,
    justifyContent: "center",
    alignItems : "center",
    margin:8,
    },
    btnGray:{
    width : 80,
    height:80,
    borderRadius: 24,
    backgroundColor: mycolours.btnGray,
    justifyContent: "center",
    alignItems : "center",
    margin:8,
    },
    smallTextLight:{
        fontSize:32,
        color: mycolours.white,
    },
    smallTextDark:{
fontSize:32,
color: mycolours.black,
    },

    row:{
        maxWidth:'100%',
        flexDirection:"row" ,
    },
    viewBottom:{
        position:"absolute",
        bottom:50,
    },
    ScreenFirstNumber:{
        fontSize:96,
        color: mycolours.gray,
        fontWeight:'200',
        alignSelf:"flex-end",
    },
    ScreenSecondNumber:{
        fontSize:40,
        color: mycolours.gray,
        fontWeight:'200',
        alignSelf:"flex-end",
    }, 

})