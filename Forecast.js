import React, {Component} from 'react'
import { StyleSheet, Text, View} from 'react-native'


class Forecast extends React.Component {
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.bigText}>
             {this.props.main}
             </Text>
             <Text style = {styles.MainText}>
               Current conditions: {this.props.description}
            </Text>
            <Text style={styles.bigText}>
            {this.props.temp}F
            </Text>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#666666'
        height: 130
    },
    bigText: {
        flex:2,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF',
    },
    mainText: {
        flex:1,
        fontSize:16,
        textAlign: 'center',
        color: '#FFFFFF'
    }
})

export default Forecast