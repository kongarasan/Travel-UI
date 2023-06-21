import React from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, FontAwesome5, AntDesign , MaterialIcons} from '@expo/vector-icons';


const Profile = () => {
    return (
        <SafeAreaView >
        <ScrollView>
            <View style={{ flexDirection: "row", height: 40, marginTop: 10 }}>
                <Ionicons name="arrow-back" size={32} color="black" style={{ marginLeft: 20 }} />
                <FontAwesome5 name="edit" size={22} color="black" style={{ marginLeft: 290 }} />
            </View>
            <View style={{ marginRight: 20, marginTop: 16, flexDirection: "row" }}>
                <Image style={{ height: 55, width: 55, marginLeft: 25 }}
                    source={require('../assets/images/person03.png')}></Image>
                <Text style={{ fontSize: 20, marginTop: 12, marginLeft: 10 }}>Maria</Text>
                <Text style={{ fontSize: 16, marginTop: 12, marginLeft: 180, color: "#98A3F4" }}>Admin</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 26, marginLeft: 29 }}>
                <Ionicons name="call" size={24} color="#656565" />
                <Text style={{ marginLeft: 14, marginTop: 5, color: "#656565" }}>6384951651</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 14, marginLeft: 29 }}>
                <AntDesign name="mail" size={24} color="#656565" />
                <Text style={{ marginLeft: 14, marginTop: 5, color: "#656565" }}>maria0024@gmail.com</Text>
            </View>
         
            <View
                style={{ flexDirection: "row" ,marginTop:25, borderWidth:1,borderColor:"#DFDFDF"}}>
                <View style={{ height: 90, width: 195 ,justifyContent:'center'}}>
                    <Text style={{fontSize:20,color:'#319B3C',marginHorizontal:46}}>₹1800.00</Text>
                    <Text style={{fontSize:14,color:'#656565',marginHorizontal:69}}>Wallet</Text>
                </View>
                <View style={{height:'100%', width:1, backgroundColor:'#DFDFDF'}}/>
                <View style={{ height: 90, width: 195,justifyContent:'center'}}>
                    <View style={{height:40,width:100,backgroundColor:"#98A3F4",borderRadius:10,marginHorizontal:50}}>
                        <Text style={{textAlign:'center',marginTop:9,color:'white'}}>Add</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{height:60,width:370,flexDirection:'row',borderRadius:10,marginTop:23,backgroundColor:'#FFFFFF',marginHorizontal:10}}>
            <MaterialIcons name="storefront" size={24} color="black" style={{marginTop:20,marginHorizontal:18}} />
            <Text style={{marginTop:23}}>Store Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:60,width:370,flexDirection:'row',borderRadius:10,marginTop:15,backgroundColor:'#FFFFFF',marginHorizontal:10}}>
            <Ionicons name="md-wallet-outline" size={24} color="black"  style={{marginTop:20,marginHorizontal:18}} />
            <Text style={{marginTop:23}}>Payments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:60,width:370,flexDirection:'row',borderRadius:10,marginTop:15,backgroundColor:'#FFFFFF',marginHorizontal:10}}>
            <FontAwesome5 name="user-friends" size={24} color="black"  style={{marginTop:20,marginHorizontal:18}} />
            <Text style={{marginTop:23}}>Tell Your Friend</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:47,width:190,flexDirection:'row',borderRadius:10,marginTop:88,backgroundColor:'black',marginHorizontal:98}}>
           
            <Text style={{textAlign:'center',color:'white',fontSize:18,marginTop:10,marginHorizontal:60}}>Log Out </Text>
            </TouchableOpacity>
            
            <View style={{height:60,width:370,flexDirection:'row',borderRadius:10,marginTop:15,backgroundColor:'#F2F2F2',marginHorizontal:10}}>
            
            <Text style={{marginTop:24,marginHorizontal:116,color:"#FF8D69",textAlign:'center'}}>Delete my account</Text>
            </View>
            
            </ScrollView>   
        </SafeAreaView>
    );
};

export default Profile;
