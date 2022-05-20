import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black'
    },
    calculadoraContainer: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
        padding: 20
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
        marginRight: 10
    },
    resultadoPequeño: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    boton: {
        height: 70,
        width: 70,
        borderRadius: 100,
        backgroundColor: '#2D2D2D',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    bootnTexto: {
        color: 'white',
        padding: 10,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '300'
    },
    fila:{
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,

    }
});


export default styles;