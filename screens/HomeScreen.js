import * as React from 'react'
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import { H1, Text } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'
import * as WebBrowser from 'expo-web-browser'
import RadarGraph from '../components/RadarGraph'

export default function HomeScreen() {
    // const [todaysArticle, setTodaysArticle] = useSelector(state=>state.todaysArticle)
    const todaysArticle = 'https://www.cdc.gov/coronavirus/2019-ncov/index.html'
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <View style={styles.welcomeContainer}>
                    <H1 style={styles.text}>YOUR HEALTH STATUS</H1>
                    <RadarGraph />
                </View>

                <View style={styles.getStartedContainer}>
                    <Text style={styles.text}>Today : Yellow</Text>
                    <Text style={styles.text}>Average : Orange</Text>
                    <Text style={styles.text}> </Text>
                    <Text style={styles.text}>
                        Do some pushups right now. 19 of them.
                    </Text>
                    <Text style={styles.text}>Did you do them? Y N</Text>
                    <Text style={styles.text}>
                        doing them and responding yes
                    </Text>
                    <Text style={styles.text}>
                        will bump your physical score
                    </Text>
                </View>

                <View style={styles.helpContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            WebBrowser.openBrowserAsync(todaysArticle)
                        }}
                        style={styles.helpLink}
                    >
                        <Text style={styles.helpLinkText}>
                            Click here for today's Daily Article
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

HomeScreen.navigationOptions = {
    header: null,
}

function handleLinkPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
    },
    text: {
        color: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
})
