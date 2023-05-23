import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, ScrollView } from "react-native";




import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';
import { FontAwesome, MaterialCommunityIcons ,AntDesign} from '@expo/vector-icons';
import DateCard from "../components/DateCard";
import TimeSlot from "../components/TimeSlot";

export default Rental = () => {



  const [stack, setStack] = useState(-1)
  const [timeslot, setTimeslot] =useState(-1)
  return (
    <SafeAreaView style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
      <View style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Text style={{ fontSize: 24, marginHorizontal: 16 }}>Where to ?</Text>
        <TouchableOpacity style={{ height: 40, width: "25%", borderRadius: 10, justifyContent: 'center', flexDirection: 'row', backgroundColor: "#F2F6FF", alignItems: 'center' }}>
          <FontAwesome name="cab" size={20} color="black" />
          <Text style={{ fontSize: 16, color: "#BBBBBB" }}> Cab</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{ height: 40, width: "25%", borderRadius: 10, justifyContent: 'center', flexDirection: 'row', backgroundColor: "#323232", alignItems: "center" }}>
          <MaterialCommunityIcons name="bike-fast" size={24} color="white" />
          <Text style={{ fontSize: 16, color: "#BBBBBB" }}> Rental</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 18, marginTop: 32, marginHorizontal: 19, fontFamily: FONTS.bold }}>Choose your vehicle</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 24 }}>
        <View style={{ height: 170, width: 170, backgroundColor: "#FFDE84", borderRadius: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: 20, color: "#656565", marginTop: 14, marginHorizontal: 18 }}>Bike</Text>
            <View style={{ height: 21, width: 56, backgroundColor: "#DADEFF", marginTop: 12, borderRadius: 5 }}>
              <Text style={{ fontSize: 14, marginTop: 2 }}> Normal</Text>
            </View>
          </View>
          <Image style={{ height: 123, width: 160 }} source={require('../assets/images/bike2.png')}></Image>
        </View>
        <View style={{ height: 170, width: 170, backgroundColor: "#FEB0A6", borderRadius: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: 20, color: "#656565", marginTop: 14, marginHorizontal: 18 }}>Scooty</Text>
            <View style={{ height: 21, width: 56, backgroundColor: "#DADEFF", marginTop: 12, borderRadius: 5 }}>
              <Text style={{ fontSize: 14, marginTop: 2 }}> Medium</Text>
            </View>
          </View>

          <Image style={{ height: 123, width: 160, marginTop: 5 }} source={require('../assets/images/bike3.png')}></Image>
        </View>
      </View>
      <Text style={{ fontSize: 18, marginTop: 32, marginHorizontal: 22 }}>Schedule</Text>
      <ScrollView horizontal={true} style={{ marginTop:22, height:60, flexGrow:0}} showsHorizontalScrollIndicator={false} contentContainerStyle={{ height:60}}>
        <DateCard day="Sat" date="11"  color={ stack != 1 ?  "#F2F6FF" : "#98A3F4"} onClick={()=>{setStack(1)}} />
        <DateCard day="Sun" date="12" color={ stack != 2 ?  "#F2F6FF" :"#98A3F4"} onClick={()=>{setStack(2)}}/>
        <DateCard day="Mon" date="13" color={ stack != 3 ?  "#F2F6FF" : "#98A3F4"} onClick={()=>{setStack(3)}}/>
        <DateCard day="Tue" date="14" color={ stack != 4 ?  "#F2F6FF" : "#98A3F4"} onClick={()=>{setStack(4)}}/>
        <DateCard day="Wed" date="15" color={ stack != 5 ?  "#F2F6FF" : "#98A3F4"} onClick={()=>{setStack(5)}}/>
        <DateCard day="Thu" date="16" color={ stack != 6 ?  "#F2F6FF" : "#98A3F4"} onClick={()=>{setStack(6)}}/>
        <DateCard day="Fri" date="17" color={ stack != 7 ?  "#F2F6FF" : "#98A3F4"} onClick={()=>{setStack(7)}}/>
        
      </ScrollView>
      <Text style={{ fontSize: 18, marginTop: 39, marginHorizontal: 22 }}>Time slot </Text>
      
      <ScrollView horizontal={true} style={{ height: 45, marginTop: 5 ,flexGrow:0}} showsHorizontalScrollIndicator={false} contentContainerStyle={{}}>
       <TimeSlot time="9:00 AM" color={ timeslot != 1 ?  "#F2F6FF" : "#98A3F4"} onClick={()=>{setTimeslot(1)}}/>
       <TimeSlot time="12:00 PM" color={ timeslot != 2 ?  "#F2F6FF" : "#98A3F4"} onClick={()=>{setTimeslot(2)}}/>
       <TimeSlot time="6:00 PM" color={ timeslot != 3 ?  "#F2F6FF" : "#98A3F4"} onClick={()=>{setTimeslot(3)}}/>
       <TimeSlot time="9:00 PM" color={ timeslot != 4 ?  "#F2F6FF" : "#98A3F4"} onClick={()=>{setTimeslot(4)}}/>
      </ScrollView>
       <Text style={{fontSize:18,marginTop:32,marginHorizontal:22}}>Location</Text>
       <View style={{height:48,width:306,backgroundColor:"#F5F5F5",borderRadius:10,marginTop:16,marginHorizontal:44,flexDirection:'row'}}>
         <Text style={{fontSize:16,marginTop:13,marginHorizontal:20,color:"#BBBBBB"}}>Select pickup location</Text>
         <AntDesign name="caretdown" size={24} color="#656565" style={{marginTop:8,left:60}} />

       </View>
       <TouchableOpacity style={{height:50,width:259,backgroundColor:"black",borderRadius:10,marginTop:16,marginHorizontal:70,flexDirection:'row'}}>
            <Text style={{color:"white",fontSize:20,marginTop:12,marginHorizontal:50}}>Confirm booking</Text>
       </TouchableOpacity>
       
    
    
  
    
    </SafeAreaView>

  )
}
