import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Page2({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.face2}>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginVertical: 10 }}>
          ADD TO CART
        </Text>
        <Text style={{ color: "grey", fontSize: 15 }}>
          Tis is just some dummy text cuz i dont have anything to write. THis is
          just some dummy text cuz i dont have anything to write.THis is just
          some dummy text cuz i dont have anything to write.THis is just some
          dummy text cuz i dont have anything to write.THis is just some dummy
          text cuz i dont have anything to write.
        </Text>
      </View>
      <View style={styles.face3}>
        <Image
          style={{ height: 250, width: 350 }}
          source={require("./assets/webshoppingpng.png")}
        />
      </View>
      <View style={styles.face4}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Page3")}
          style={{
            backgroundColor: "#8674F3",
            paddingHorizontal: 70,
            paddingVertical: 20,
            borderRadius: 40,
            elevation: 5,
            shadowColor: "silver",
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.face5}>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text
            onPress={() => navigation.navigate("Page1")}
            style={{ color: "grey" }}
          >
            Previous
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.pageballs}></View>
          <View style={[styles.pageballs, styles.activepageball]}></View>
          <View style={styles.pageballs}></View>
        </View>
        <View
          style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}
        >
          <Text
            onPress={() => navigation.navigate("Page3")}
            style={{ color: "grey" }}
          >
            Skip
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  face2: {
    flex: 4,
    justifyContent: "center",
  },
  face3: {
    flex: 4,
    alignItems: "center",
  },
  face4: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  face5: {
    flex: 1,
    flexDirection: "row",
  },
  pageballs: {
    backgroundColor: "grey",
    height: 8,
    width: 8,
    margin: 5,
    borderRadius: 10,
  },
  activepageball: {
    backgroundColor: "#8674F3",
    height: 8,
    width: 20,
    margin: 4,
    borderRadius: 10,
  },
});
