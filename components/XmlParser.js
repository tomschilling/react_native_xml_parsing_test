import React, { Component } from "react";
import { Text, View } from 'react-native';
import { parseString } from 'react-native-xml2js';

class XMLParser extends Component {
    constructor() {
      super()
      this.state = { data: "" }
    }
  
    async componentDidMount() {
        const response = await fetch('http://www.rugbyweb.de/db2xml.php?dtd=rugbyweb1.0&league=BL1N')
        const text = await response.text()
        let extractedData
        parseString(text, function(err,result){
          extractedData = JSON.stringify(result)
        });
        this.setState({ data:  extractedData})
        console.log('state', this.state.data)
    }
  
    render() {
      return (
        <View>
          <Text>{this.state.data}</Text>
        </View>       
      );
    }
  }
  
export default XMLParser;
    



    
