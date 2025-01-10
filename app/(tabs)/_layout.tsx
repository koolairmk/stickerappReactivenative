import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function TabsLayout() {
  return <Tabs 
        screenOptions={{
            tabBarActiveTintColor: "black",
        }}
  >
            <Tabs.Screen name="index" options={{
              headerTitle: "Home",
              tabBarIcon: ({color,size}) => <Ionicons name="home" color={color} size={size} />
            }} />
           <Tabs.Screen name="about"  options={
             {
               headerTitle: "About",
               tabBarIcon: ({color,size}) => <Ionicons name="information-circle" color={color} size={size} />
             }
           }/>

           <Tabs.Screen name="+not-found" options={{
             headerTitle: "Oops! Not Found",
           }}/>
          </Tabs>
    ;
}