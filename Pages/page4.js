import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    price: "$99",
    title: "Adidas Orange Jacket",
    img: require("./assets/sj4.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    price: "$80",
    title: "Raw Grey Jacket",
    img: require("./assets/sj3.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    price: "$120",
    title: "Camouflage Jacket",
    img: require("./assets/sj2.png"),
  },
  {
    id: "5864a0f-3da1-471f-bd96-145571e29d72",
    price: "$150",
    title: "Adidas Yellow Jacket",
    img: require("./assets/sj1.png"),
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View
      style={{
        flex: 1,
        height: 110,
        backgroundColor: "#fff",
        position: "relative",
        borderRadius: 20,
        borderBottomStartRadius: 70,
      }}
    >
      <Image style={styles.images} source={item.img} />
    </View>
    <View style={{ flex: 1.5, marginTop: 20, marginHorizontal: 20 }}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.stars}>
        <IconAntDesign style={styles.staricon} name="star" />
        <IconAntDesign style={styles.staricon} name="star" />
        <IconAntDesign style={styles.staricon} name="star" />
        <IconAntDesign style={styles.staricon} name="star" />
        <IconAntDesign style={styles.staricon} name="star" />
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#9E91EB" }}>
        {item.price}
      </Text>
    </View>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstview}>
        <IconMaterialIcons
          style={{
            fontSize: 20,
            position: "absolute",
            alignSelf: "center",
            padding: 15,
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
            textAlign: "right",
            backgroundColor: "#fff",
          }}
          name="shoppingcart"
        />
      </View>

      <View style={styles.secondview}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Women Jacket</Text>
      </View>

      <View style={styles.thirdview}>
        <View style={styles.searchbtn}>
          <TextInput style={{ fontSize: 13, color: "silver" }}>
            Search Jacket
          </TextInput>
          <Text
            style={{
              position: "absolute",
              right: 20,
              top: 20,
              color: "#9E91EB",
            }}
          >
            Filter
          </Text>
        </View>
      </View>

      <View style={styles.forthview}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 20,
    backgroundColor: "#E6E6E7",
  },
  firstview: {
    flex: 1,
    position: "relative",
    flexDirection: "row",
  },
  secondview: {
    flex: 1,
    justifyContent: "center",
  },
  thirdview: {
    flex: 1,
    justifyContent: "center",
  },
  forthview: {
    flex: 7,
    marginTop: 20,
  },
  searchbtn: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },
  item: {
    flexDirection: "row",
    marginVertical: 20,
  },
  images: {
    position: "absolute",
    top: -20,
    left: 10,
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 15,
    color: "black",
  },
  stars: {
    flexDirection: "row",
    marginVertical: 5,
    marginBottom: 15,
  },
  staricon: {
    fontSize: 15,
    color: "gold",
  },
});

export default App;
