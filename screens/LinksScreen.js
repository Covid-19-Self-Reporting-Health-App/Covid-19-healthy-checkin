/* eslint-disable react/no-array-index-key */
//import * as React from 'react';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setAns } from '../store/questions'
// import { StyleSheet, Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'
// import * as WebBrowser from 'expo-web-browser';
// import { RectButton, ScrollView } from 'react-native-gesture-handler';

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Text,
    Body,
    Button,
    Switch,
    Left,
    Right,
} from 'native-base'

export default function QuestionScreen() {
    const data = useSelector(state => state.questions)
    const dispatch = useDispatch()
    return (
        <Container>
            <Header />
            <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Left />
                        <Text>Daily Questions</Text>
                        <Right />
                    </CardItem>
                    {data.map((entry, idx) => {
                        return (
                            <React.Fragment key={`data-${idx}`}>
                                <CardItem bordered>
                                    <Left>
                                        <Text>{entry.question}</Text>
                                    </Left>
                                    <Right>
                                        <Switch
                                            value={entry.answer}
                                            onChange={() =>
                                                dispatch(setAns(idx))
                                            }
                                        />
                                    </Right>
                                </CardItem>
                            </React.Fragment>
                        )
                    })}
                    <CardItem footer bordered>
                        <Left />
                        <Body>
                            <Button>
                                <Text>Submit</Text>
                            </Button>
                        </Body>
                        <Right />
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}

// export default function LinksScreen() {
//   return (
//     <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//       <OptionButton
//         icon="md-school"
//         label="Read the Expo documentation"
//         onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
//       />

//       <OptionButton
//         icon="md-compass"
//         label="Read the React Navigation documentation"
//         onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
//       />

//       <OptionButton
//         icon="ios-chatboxes"
//         label="Ask a question on the forums"
//         onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
//         isLastOption
//       />
//     </ScrollView>
//   );
// }

// function OptionButton({ icon, label, onPress, isLastOption }) {
//   return (
//     <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
//       <View style={{ flexDirection: 'row' }}>
//         <View style={styles.optionIconContainer}>
//           <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
//         </View>
//         <View style={styles.optionTextContainer}>
//           <Text style={styles.optionText}>{label}</Text>
//         </View>
//       </View>
//     </RectButton>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fafafa',
//   },
//   contentContainer: {
//     paddingTop: 15,
//   },
//   optionIconContainer: {
//     marginRight: 12,
//   },
//   option: {
//     backgroundColor: '#fdfdfd',
//     paddingHorizontal: 15,
//     paddingVertical: 15,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderBottomWidth: 0,
//     borderColor: '#ededed',
//   },
//   lastOption: {
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   optionText: {
//     fontSize: 15,
//     alignSelf: 'flex-start',
//     marginTop: 1,
//   },
// });
