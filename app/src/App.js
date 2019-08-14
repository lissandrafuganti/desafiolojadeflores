import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{ApolloProvider} from 'react-apollo';
import client from './apollo/client';
import chat from './pages/chat';
export default function App() {
  return (
    <ApolloProvider client={client}>
      <View/>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
