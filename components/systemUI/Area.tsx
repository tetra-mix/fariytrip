import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import { ScrollView } from 'react-native-gesture-handler';

export default function Area() {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>伊勢志摩</Text>
                <Text style={styles.description}>
                    伊勢志摩は、三重県の南東部に位置する地域である。伊勢神宮や夫婦岩など、観光地が多い。
                </Text>
            </View>
        </View>
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
    },
    description: {
        fontSize: 15,
    },

});