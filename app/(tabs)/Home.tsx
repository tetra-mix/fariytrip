import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Area from '../../components/systemUI/Area';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabOneScreen() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Fairy Trip</Text>
        </View>
        <View style={styles.minicontainer}>
          <Text style={styles.normalText}>
            旅行をもっと楽しく、まだ知らないものに...
          </Text>
          <Text style={styles.normalText}>

          </Text>
        </View>
      </View>
      <View>
        <View style={styles.topContainer}>
          <Text style={styles.subtitle}>おすすめの観光地</Text>
        </View>
        <Area />
      </View>
      <View>
        <View style={styles.topContainer}>
          <Text style={styles.subtitle}>おすすめスポット</Text>
        </View>
        <Area />
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  minicontainer: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    color: 'white',
    margin: 20
  },
  normalText: {
    padding: 20,
    fontSize: 16,
    fontWeight: '400'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
