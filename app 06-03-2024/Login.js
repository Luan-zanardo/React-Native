import {View, StyleSheet, TextInput, Text,TouchableOpacity, Image} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri:"https://cdn-icons-png.flaticon.com/512/5987/5987424.png"}}/>
      <Text style={styles.text}> Username/Email: </Text>
      <TextInput style={styles.input}/>
      <Text style={styles.text}> Senha: </Text>
      <TextInput style={styles.input}/>
      <TouchableOpacity> 
        <Text style={styles.textPassword}> Esqueceu a senha? </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}> ENVIAR </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    input:{
      
      borderWidth:3,
      borderRadius: 10,
      borderColor: 'orange',
      paddingHorizontal: 100,
      paddingVertical: 7
    },
    img:{
      width: 100,
      height: 100,
      marginBottom: 10
    },
    button:{
      borderWidth:3,
      borderRadius: 10,
      borderColor: 'orange',
      backgroundColor:'orange',
      margin: 25
    },
    text:{
      fontSize: 20,
      margin: 10
    },
    textButton:{
      fontSize: 20,
      margin: 5
    },
    textPassword:{
      fontSize: 20,
      margin: 10,
      color: 'blue'
    },
});