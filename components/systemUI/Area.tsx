import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import { ScrollView } from 'react-native-gesture-handler';

export default function Area() {
    return (
        <ScrollView horizontal={true} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>伊勢志摩</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>伊勢志摩</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>伊勢志摩</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>伊勢志摩</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        width: '100%',
        flexDirection: 'row',
    },
    content: {
        width: '50%',
        margin: 10,
        padding: 10,
        backgroundColor: 'gray',
        color: 'white',
        borderRadius: 10,
        border: 'solid',
        borderColor: 'white',
        borderWidth: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }

});