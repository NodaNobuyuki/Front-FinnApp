import { useState } from "react";
import InputGeneric from "../components/InputGeneric";
import { StyleSheet, View } from "react-native";
import { Pie, PolarChart } from "victory-native";



const InsertValue = () =>{


    const [valor1, setValue] = useState(0)
    const [valor2, setValor] = useState(0)
    
    const DATA = [
        {label: "item1 ", value: valor1, color: "#000000"},
        {label: "item2 ", value: valor2, color: "#111111"} 
    ]

    return(

        <View style={{height:300}}>

            <InputGeneric 
            placeholder="valor1" 
            onChangeText={setValue} 
            value={valor1} 
            secureTextEntry={false} 
            isNumeric 
            keyboardType="numeric" />

            <InputGeneric 
            placeholder="valor2" 
            onChangeText={setValor} 
            value={valor2} 
            secureTextEntry={false} 
            keyboardType="numeric" 
            isNumeric />

            <PolarChart 
            data={DATA}
            colorKey={"color"}
            valueKey={"value"}
            labelKey={"label"}>

                <Pie.Chart />
            </PolarChart>



        </View>
        

    );

}

const style = StyleSheet.create({

})

export default InsertValue