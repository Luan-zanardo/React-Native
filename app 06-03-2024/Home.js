import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Image style={styles.img} source={{uri:"https://i.pinimg.com/originals/74/13/93/741393fd17c877fcd7f7769094d47bb3.png"}}/>
      </View >
      <View style={styles.container}>
        <Text style={styles.title}> AVILA </Text>
        <Text style={styles.title2}> DOCES GOURMET </Text>
        <Image style={styles.foto} source={{uri:"https://cdn0.casamentos.com.br/vendor/8920/3_2/960/jpg/opcoes-de-doces-para-substituir-o-bem-casado-pao-de-mel-para-casamentos_13_268920-158169604631284.jpeg"}}/>
        <Image style={styles.foto} source={{uri:"https://www.receiteria.com.br/wp-content/uploads/receitas-de-doces-10-1.jpg"}}/>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}> ENCOMENDAR </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    menu:{
      backgroundColor: 'black',
      width: '100%',
      height: 120,
      justifyContent:"center",
      alignItems:"center"
    },
    img:{
      width: 100,
      height: 100,
      margin:10,
    },
    title:{
      marginTop: 20,
      fontSize: 60,
    },
    title2:{
      fontSize: 30,
    },
    foto:{
      borderWidth:5,
      borderRadius: 10,
      borderColor: 'black',
      width: 350,
      height: 200,
      marginTop:20,
    },
    textButton:{
      fontSize: 25,
      margin: 5
    },
    button:{
      borderWidth:3,
      borderRadius: 10,
      borderColor: 'orange',
      backgroundColor:'orange',
      marginTop: 40
    },
});