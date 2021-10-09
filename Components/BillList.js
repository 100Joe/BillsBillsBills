import React, { useState } from 'react'
import { View, Text } from 'react-native';
import AddBill from './AddBill';

function BillList() {
  const [total, setTotal] = useState(0);
  const [billType, setbillType] = useState("");
  const [company, setCompany] = useState("");

  return (
    <View>
      <View style={{
        height: 50,
        width: 450,
        borderWidth: 3,
        borderRadius: 5,
        marginBottom: 5,
        borderColor: "green",
        flexDirection: "row"
      }}>
        <Text style={{ flex: 1, backgroundColor: "grey", textAlign: 'center' }}>Date</Text>
        <View style={{ flex: 4, backgroundColor: "white", textAlign: 'left', flexDirection: 'column' }}>
          <Text style={{ flex: 1 }}>{billType}</Text>
          <Text style={{ flex: 1, marginLeft: 15 }}>{company}</Text>
        </View>
        <Text style={{ flex: 1, backgroundColor: "grey", fontSize: 20, textAlign: "center" }}>${total}</Text>
      </View>
      <View>
        <AddBill />
      </View>
    </View>
  )
}


export default BillList;
