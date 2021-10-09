import React, { useState } from 'react'
import { View, Button, Modal, TextInput } from 'react-native'


function AddBill() {
  const [modalVisible, setModalVisible] = useState(false);

  const addBillModal = () => {
    <Modal>
      <View>
        <View>
          <Text>Hello World!</Text>
          <TextInput
            value={() => console.log("New Bill total being entered")}
            placeholder="Total..."

          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  }

  return (
    <View>
      <Button
        onPress={() => {
          alert('You tapped the button!');
          addBillModal;
        }}
        title="Press Me"
      />
    </View>
  )
}

export default AddBill
