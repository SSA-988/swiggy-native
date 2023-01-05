import { StyleSheet, Text, View, SafeAreaView ,Pressable,TouchableOpacity} from "react-native";
import React, { useEffect, useRef ,useState} from "react";
import moment from "moment";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
const OrderScreen = () => {
  const [tip,setTip] = useState(0);
  const time = moment().format("LT");
  const mapView = useRef(null);
  const [coordinates] = useState([
    {
      latitude: 12.9716,
      longitude: 77.5946,
    },
    {
      latitude: 13.0451,
      longitude: 77.6269,
    },
  ]);
  useEffect(() =>{
    mapView.current.fitToCoordinates(coordinates,{
      edgePadding:{
        top:50,
        bottom:50,
        left:50,
        right:50
      }
    });
  },[])
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
          backgroundColor: "#fc8019",
          padding: 10,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
            Delivery in 20 mins
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "600",
              marginTop: 4,
            }}
          >
            Order placed at {time}
          </Text>
        </View>
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
          HELP
        </Text>
      </View>
      <MapView
      ref={mapView}
      style={{width:"100%",height:400}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={coordinates[0]}/>
        <Marker coordinate={coordinates[1]}/>

        <Polyline coordinates={coordinates} strokeColor="black" lineDashPattern={[4]} strokeWidth={1}/>
      </MapView>
      <View
        style={{
          height: 320,
          width: "100%",
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View style={{ padding: 10 }}>
          <View>
            <Text style={{ fontWeight: "500", fontSize: 17,textAlign:"center", }}>
              Meghana Foods has accepted your order
            </Text>
            <View style={{ flexDirection: "row",marginTop:20, }}>
              <FontAwesome5
                name="hand-holding-heart"
                size={28}
                color="#fc8019"
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 2,
                    marginBottom:6,
                  }}
                >
                  Tip your hunger Saviour
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#696969",
                    marginRight: 10,
                    paddingHorizontal: 2,
                  }}
                >
                  Thank your delivery partner for helping you stay safe
                  indoors.Support them through these tough times with a tip
                </Text>
                <Pressable
                  style={{
                    paddingTop: 20,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setTip(30)}
                    style={{
                      backgroundColor: "#F5F5F5",
                      marginHorizontal: 10,
                      paddingHorizontal: 10,
                      borderRadius: 7,
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        color: "#002D62",
                        fontWeight: "bold",
                      }}
                    >
                      ₹30
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setTip(50)}
                    style={{
                      alignItems: "center",
                      backgroundColor: "#F5F5F5",
                      marginHorizontal: 10,
                      borderRadius: 7,
                      // paddingHorizontal: 10,
                    }}
                  >
                    <Text
                      style={{
                        padding: 4,
                        color: "#002D62",
                        fontWeight: "bold",
                      }}
                    >
                      ₹50
                    </Text>
                    <Text
                      style={{
                        backgroundColor: "orange",
                        paddingHorizontal: 10,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Most Tipped
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setTip(70)}
                    style={{
                      backgroundColor: "#F5F5F5",
                      marginHorizontal: 10,
                      paddingHorizontal: 10,
                      borderRadius: 7,
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        color: "#002D62",
                        fontWeight: "bold",
                      }}
                    >
                      ₹70
                    </Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
            {tip ? (
        <View>
          <Text
            style={{
              color: "#fc8019",
              padding: 10,
              marginLeft: 10,
              marginRight: 10,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            please pay {"₹"}
            {tip} to your delivery agent at the time of delivery
          </Text>
          <TouchableOpacity
            onPress={() => setTip(0)}
            activeOpacity={0.7}
            style={{
              padding: 10,
              marginLeft: 10,
              marginRight: 10,
              position: "absolute",
              top: 40,

              paddingBottom: 40,
            }}
          >
            <Text style={{ color: "red", fontSize: 14, fontWeight: "700" }}>
              (Cancel)
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
