import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

export default function Page5() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstview}>
        <IconMaterialIcons
          style={{
            fontSize: 20,
            position: "absolute",
            alignSelf: "center",
            padding: 15,
            elevation: 5,
            borderRadius: 100,
            backgroundColor: "#fff",
          }}
          name="arrow-back"
        />
        <IconAntDesign
          style={{
            color: "#9E91EB",
            fontSize: 20,
            position: "absolute",
            right: 0,
            alignSelf: "center",
            padding: 15,
            borderRadius: 100,
            elevation: 5,
            textAlign: "right",
            backgroundColor: "#fff",
          }}
          name="shoppingcart"
        />
      </View>

      <View style={styles.secondview}>
        <View
          style={{
            height: 290,
            backgroundColor: "#fff",
            position: "relative",
            marginHorizontal: 30,
            borderBottomRightRadius: 20,
            borderBottomStartRadius: 120,
          }}
        >
          <IconAntDesign
            style={{
              color: "#9E91EB",
              fontSize: 20,
              position: "absolute",
              right: -10,
              top: 15,
              alignSelf: "center",
              padding: 15,
              borderRadius: 100,
              textAlign: "right",
              elevation: 5,
              backgroundColor: "#fff",
            }}
            name="hearto"
          />
          <Image style={styles.images} source={require("./assets/sj4.png")} />
        </View>
      </View>

      <View style={styles.thirdview}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
          Orange Adidas Jacket
        </Text>
        <View style={styles.review}>
          <Text
            style={{
              borderBottomWidth: 4,
              borderBottomColor: "#9E91EB",
              paddingBottom: 20,
            }}
          >
            Review |
          </Text>
          <View style={{ flexDirection: "row", margin: 4 }}>
            <IconAntDesign style={styles.staricon} name="star" />
            <IconAntDesign style={styles.staricon} name="star" />
            <IconAntDesign style={styles.staricon} name="star" />
            <IconAntDesign style={styles.staricon} name="star" />
            <IconAntDesign style={styles.staricon} name="star" />
          </View>
        </View>
      </View>

      <View style={styles.forthview}>
        <Text style={{ margin: 10 }}>
          It is a long established fact the reader would be distracted by the
          readable content of the page
        </Text>
      </View>

      <View style={styles.fiveview}>
        <Text
          style={{
            fontSize: 15,
            color: "#9E91EB",
            paddingHorizontal: 30,
            backgroundColor: "white",
            paddingVertical: 20,
            marginRight: 60,
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          Material: 91% polyester, 9% elastane
        </Text>
      </View>

      <View style={styles.sixview}>
        <Text style={styles.sizes}>XS</Text>
        <Text style={styles.sizes}>S</Text>
        <Text style={[styles.sizes, styles.activesize]}>M</Text>
        <Text style={styles.sizes}>L</Text>
        <Text style={styles.sizes}>XL</Text>
      </View>

      <View style={styles.sevenview}>
        <View style={styles.addtocart}>
          <View style={styles.amount}>
            <Text style={{ fontSize: 10, color: "white" }}>Total Amount</Text>
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
              $110
            </Text>
          </View>
          <TouchableOpacity style={styles.addtocartbtn}>
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6E7",
    marginTop: 30,
  },
  firstview: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 5,
    position: "relative",
    flexDirection: "row",
  },
  secondview: {
    flex: 6,
  },
  thirdview: {
    flex: 2,
    marginHorizontal: 20,
  },
  forthview: {
    flex: 1.5,
    marginHorizontal: 20,
  },
  fiveview: {
    flex: 1.5,
    justifyContent: "center",
  },
  sixview: {
    flex: 1.5,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  sevenview: {
    flex: 2,
    marginHorizontal: 20,
  },
  images: {
    position: "absolute",
    alignSelf: "center",
    top: -10,
    height: 280,
    width: 230,
  },
  review: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  staricon: {
    color: "gold",
  },
  sizes: {
    margin: 10,
    marginVertical: 15,
    padding: 12,
    backgroundColor: "white",
    borderRadius: 5,
    color: "black",
  },
  activesize: {
    backgroundColor: "#9E91EB",
    color: "#fff",
  },
  addtocart: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#9E91EB",
    margin: 10,
    borderRadius: 20,
  },
  amount: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
  },
  addtocartbtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#806FE1",
    margin: 20,
    borderRadius: 10,
  },
});
