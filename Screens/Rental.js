import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, ScrollView, Modal, Pressable, StyleSheet, KeyboardAvoidingView } from "react-native";




import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import DateCard from "../components/DateCard";
import TimeSlot from "../components/TimeSlot";
import { Dropdown } from 'react-native-element-dropdown';
import Lottie from 'lottie-react-native';


const Rental = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    { label: 'Tambaram', value: '1' },
    { label: 'Vadapalani', value: '2' },
    { label: 'Adayar', value: '3' },
    { label: 'Guindy', value: '4' },
    { label: 'Pallavaram', value: '5' },
    { label: 'Koyembedu', value: '6' },
    { label: 'Chrompet', value: '7' },
    { label: 'KK Nagar', value: '8' },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [stack, setStack] = useState(-1)
  const [timeslot, setTimeslot] = useState(-1)
  const [modelView, setModelView] = useState(true)
  const [time,setTime] = useState("")
  
return (

    <SafeAreaView style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: 24, marginHorizontal: 16 }}>Where to ?</Text>
        
            <TouchableOpacity style={{ height: 40, width: "25%", borderRadius: 10, justifyContent: 'center', flexDirection: 'row', backgroundColor: "#F2F6FF", alignItems: 'center' }}
             onPress={() =>{navigation.navigate("Cab")}}>
             
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
          <ScrollView horizontal={true} style={{ marginTop: 22, height: 60, flexGrow: 0 }} showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: 60 }}>
            <DateCard day="Sat" date="11" color={stack != 1 ? "#F2F6FF" : "#98A3F4"} onClick={() => { setStack(1) }} />
            <DateCard day="Sun" date="12" color={stack != 2 ? "#F2F6FF" : "#98A3F4"} onClick={() => { setStack(2) }} />
            <DateCard day="Mon" date="13" color={stack != 3 ? "#F2F6FF" : "#98A3F4"} onClick={() => { setStack(3) }} />
            <DateCard day="Tue" date="14" color={stack != 4 ? "#F2F6FF" : "#98A3F4"} onClick={() => { setStack(4) }} />
            <DateCard day="Wed" date="15" color={stack != 5 ? "#F2F6FF" : "#98A3F4"} onClick={() => { setStack(5) }} />
            <DateCard day="Thu" date="16" color={stack != 6 ? "#F2F6FF" : "#98A3F4"} onClick={() => { setStack(6) }} />
            <DateCard day="Fri" date="17" color={stack != 7 ? "#F2F6FF" : "#98A3F4"} onClick={() => { setStack(7) }} />

          </ScrollView>
          <Text style={{ fontSize: 18, marginTop: 39, marginHorizontal: 22 }}>Time slot </Text>

          <ScrollView horizontal={true} style={{ height: 45, marginTop: 5, flexGrow: 0 }} showsHorizontalScrollIndicator={false} contentContainerStyle={{}}>
            <TimeSlot time="9:00 AM" color={timeslot != 1 ? "#F2F6FF" : "#98A3F4"} onClick={() => { setTimeslot(1) }} setTime={setTime} />
            <TimeSlot time="12:00 PM" color={timeslot != 2 ? "#F2F6FF" : "#98A3F4"} onClick={() => { setTimeslot(2) }} setTime={setTime}/>
            <TimeSlot time="6:00 PM" color={timeslot != 3 ? "#F2F6FF" : "#98A3F4"} onClick={() => { setTimeslot(3) }} setTime={setTime} />
            <TimeSlot time="9:00 PM" color={timeslot != 4 ? "#F2F6FF" : "#98A3F4"} onClick={() => { setTimeslot(4) }} setTime={setTime}/>
          </ScrollView>
          <Text style={{ fontSize: 18, marginTop: 32, marginHorizontal: 22 }}>Location</Text>
          {/* <View style={{height:48,width:306,backgroundColor:"#F5F5F5",borderRadius:10,marginTop:16,marginHorizontal:44,flexDirection:'row'}}>
         <Text style={{fontSize:16,marginTop:13,marginHorizontal:20,color:"#BBBBBB"}}>Select pickup location</Text>
         <AntDesign name="caretdown" size={24} color="#656565" style={{marginTop:8,left:60}} />

       </View>
        */}


          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            dropdownPosition="top"
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select pickup location'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}

          />
          <TouchableOpacity
            onPress={() => { setModalVisible(true) }}
            style={{ height: 50, width: 259, backgroundColor: "black", borderRadius: 10, marginTop: 24, marginHorizontal: 70, flexDirection: 'row' }}>

            <Text
              style={{ color: "white", fontSize: 20, marginTop: 12, marginHorizontal: 50 }}>Confirm booking</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {

              setModalVisible(!modalVisible);
            }}>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
              { modelView == true ? <View style={{
                margin: 20,
                backgroundColor: 'white',
                borderRadius: 20,
                paddingVertical: 35,
                paddingHorizontal:20,
                alignItems: 'center',
                shadowColor: '#000',
                height: 289,
                width: 326,
              }}>
              <Image  style={{height:59,width:78}}source={require('../assets/images/undraw.png')}></Image>
                <Text style={{ fontSize: 20, marginTop:32 }}>Rent     Scooty  from</Text>
                <Text style={{ fontSize: 20 ,color:"#98A3F4"}}>22nd Fed     {time}</Text>
                <View style={{flexDirection: 'row', marginTop: 50, alignItems: 'center', justifyContent: "space-between", width:'100%' }}>
                  <Pressable
                    style={{
                      borderRadius: 20,
                      padding: 10,
                      elevation: 2,
                      backgroundColor: '#F5F5F5',
                      height: 52,
                      width: "45%",
                      Right:8

                    }}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{ fontSize: 18 ,textAlign:'center',marginTop:6,color:"#B5B5B5"}}>Cancel</Text>
                  </Pressable>
                  <Pressable
                    style={{
                      borderRadius: 20,
                      padding: 10,
                      elevation: 2,
                      backgroundColor: '#000000',
                       height: 52,
                      width: "45%"
                    }}
                    onPress={() => {
                      setModelView(false)
                      
                    }}>
                    <Text style={{ fontSize: 18 ,textAlign:'center',marginTop:6,color:"white"}}>Confirm</Text>
                  </Pressable>

                </View>
              </View>: <View style={{
                margin: 20,
                backgroundColor: 'white',
                borderRadius: 20,
                paddingVertical: 35,
                paddingHorizontal:20,
                alignItems: 'center',
                shadowColor: '#000',
                height: 289,
                width: 326,
              }}>
               <Lottie style={{height:97,width:97}}
               source={require('../assets/images/completed.json')} autoPlay loop 
               ></Lottie>
               <Text style={{fontSize:18}}>Booking completed</Text>
               <Text style={{justifyContent:'center',textAlign:'center',marginTop:15}}>A QR for your booking will be on {'\n'}your activity page</Text>
               <TouchableOpacity style={{height:54,width:150,backgroundColor:'black',borderRadius:10,marginTop:20}}
               onPress={() => {
                setModalVisible(!modalVisible)
                setModelView(true)
                 }}>
                 <Text style={{textAlign:'center',marginTop:14,fontSize:18,color:'white'}}>Okay</Text>
               </TouchableOpacity>
              </View>
              }

            </View>
          </Modal>
        </KeyboardAvoidingView>
      </ScrollView>


    </SafeAreaView>
  
  )
            }
  export default Rental 



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 48,
    width: 306,
    backgroundColor: "#F5F5F5",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 42,
    marginTop: 20
  },
  icon: {
    marginRight: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    marginHorizontal: 30,
    color: "#BBBBBB"
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  
});


