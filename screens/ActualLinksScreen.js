//import * as React from 'react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateTime } from 'luxon'

// import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
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
    Left,
    Right,
} from 'native-base'

export default function ActualLinksScreen() {
    const todaysArticle = useSelector(state => state.todaysArticle)

    // these should be here always
    const helpfulArticles = [
        { name: 'CDC Website', url: 'https://www.cdc.gov/' },
        { name: 'WHO Website', url: 'https://www.who.int/' },
        { name: 'WHO Website', url: 'https://www.who.int/' },
        { name: 'WHO Website', url: 'https://www.who.int/' },
        { name: 'WHO Website', url: 'https://www.who.int/' },
    ]

    // these should be pulled from the server, or from the Async storage if we decide to store them
    const olderArticles = [
        { name: 'article1314', date: DateTime.local(), url: 'link1' },
        { name: 'article2', date: DateTime.local(), url: 'link2' },
        { name: 'article3', date: DateTime.local(), url: 'link3' },
        { name: 'article4', date: DateTime.local(), url: 'link4' },
        { name: 'article5', date: DateTime.local(), url: 'link5' },
        { name: 'article6', date: DateTime.local(), url: 'link6' },
        { name: 'article7', date: DateTime.local(), url: 'link7' },
        { name: 'article8', date: DateTime.local(), url: 'link8' },
        { name: 'article9', date: DateTime.local(), url: 'link9' },
    ]
    return (
        <Container>
            <Content padder>
                <Card>
                    <CardItem style={{ justifyContent: 'center' }}>
                        <Text>Today's Article : </Text>
                    </CardItem>
                    <CardItem bordered>
                        <Button
                            transparent
                            onPress={() =>
                                WebBrowser.openBrowserAsync(todaysArticle.url)
                            }
                        >
                            <Text>
                                {todaysArticle.url.slice(0, 30) + '...'}
                            </Text>
                        </Button>
                    </CardItem>
                    <CardItem transparent style={{ justifyContent: 'center' }}>
                        <Text>Other Helpful Links</Text>
                    </CardItem>
                    <CardItem
                        bordered
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        {helpfulArticles.map((art, idx) => (
                            <Button
                                style={{ margin: '1%', width: '48%' }}
                                light
                                key={idx}
                                onPress={() =>
                                    WebBrowser.openBrowserAsync(art.url)
                                }
                            >
                                <Text>{art.name}</Text>
                            </Button>
                        ))}
                    </CardItem>
                    <CardItem
                        bordered
                        style={{
                            justifyContent: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        light
                        onPress={() => WebBrowser.openBrowserAsync(art.url)}
                    >
                        <Text>Featured Archive</Text>
                        {olderArticles.map((art, idx) => (
                            <Button
                                style={{ margin: '1%', width: '98%' }}
                                light
                                key={idx}
                                onPress={() =>
                                    WebBrowser.openBrowserAsync(art.url)
                                }
                            >
                                <Text>{art.name}</Text>

                                <Text>{art.date.toISODate()}</Text>
                            </Button>
                        ))}
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}
