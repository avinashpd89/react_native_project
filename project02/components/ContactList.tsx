import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Avinash Prasad',
      status: 'Just an extra ordinary student',
      imageUrl:
        'https://avatars.githubusercontent.com/u/136260086?s=400&u=1922463e6cafbd478a75e161d6e105a1e45c185a&v=4',
    },
    {
      uid: 2,
      name: 'Abhi Prasad',
      status: 'Just an extra ordinary student',
      imageUrl:
        'https://avatars.githubusercontent.com/u/136260086?s=400&u=1922463e6cafbd478a75e161d6e105a1e45c185a&v=4',
    },
    {
      uid: 3,
      name: 'Dhanji',
      status: 'Just an extra ordinary student',
      imageUrl:
        'https://avatars.githubusercontent.com/u/136260086?s=400&u=1922463e6cafbd478a75e161d6e105a1e45c185a&v=4',
    },
    {
      uid: 4,
      name: 'Aryan',
      status: 'Just an extra ordinary student',
      imageUrl:
        'https://avatars.githubusercontent.com/u/136260086?s=400&u=1922463e6cafbd478a75e161d6e105a1e45c185a&v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
                <Text style = {styles.userName}>{name}</Text>
            <Text style = {styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'white',
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: "#8D3DAF",
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: "#FFF"
  },
  userStatus: {
    fontSize: 12,
    fontWeight: '400',
    color: "#FFF",
  },
});
