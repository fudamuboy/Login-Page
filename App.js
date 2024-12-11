import { StatusBar } from 'expo-status-bar';
import { useActionState, useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View, statusbar } from 'react-native';

export default function App() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');
  return (
    <View style={{ backgroundColor: 'lightgray', flex: 1 }}>
      <ImageBackground source={require('./assets/key.png')}
        style={styles.ImageBackground} />

      <View style={styles.container}>

        <Text style={styles.email}>Adres-email</Text>
        <TextInput
          inputMode='email' placeholder='Enter your email' style={styles.input} />
        <Text style={styles.password}>Password</Text>
        <TextInput
          secureTextEntry={true} placeholder='Enter your password' style={styles.input}
          // pour afficher le clavier normal sans le majuscule autoCapotalize
          autoCapitalize='none'
          // pou ne pas afficher l'ecriture de correction endebut du clavier
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
        {password.length < 6 ? (
          <Text>Sifre en az karakter olmalidir</Text>
        ) : null}

        <Pressable
          onPress={() => setResult(email + " " + password)}
          style={({ pressed }) => [{
            backgroundColor: pressed ? "gray" : 'blue'
          }, styles.button]}>
          <Text style={styles.button}>GIRIS YAP</Text>
        </Pressable>
        {/* <button
        title='SAVE'
        color='blue' /> */}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,


    justifyContent: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
  },
  ImageBackground: {
    flex: 1,
    borderRadius: 5,
    margin: 20,
    top: 60,
    position: 'relative'

  },
  email: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  password: {
    textAlign: 'center',
    fontWeight: 'bold',
    top: 2,
    bottom: 2,
  },
  button: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 5,
    top: 5,


  }
});
