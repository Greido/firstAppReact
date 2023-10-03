import { Text,TouchableOpacity } from 'react-native';
function Boton({ onPress, text="Contador"}) {
    return (
        <>
        <TouchableOpacity 
        style={{backgroundColor:'blue',borderRadius:50,width:100,height:50,display:"flex",alignItems:'center',alignContent:'center',flexDirection:'column',marginTop:20}}        
        onPress={onPress}
        >
        
            <Text style={{color:'white',marginTop:15}}>

                {text}

            </Text>


        </TouchableOpacity>

        </>
    )
}

export default Boton