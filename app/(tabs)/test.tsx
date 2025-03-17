import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { router } from "expo-router";

export default function TestScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [players, setPlayers] = useState(["", "", "", ""]);

  const handleCreateRoom = () => {
    // Xử lý logic tạo phòng với 4 người chơi ở đây
    console.log("Players:", players);
    setModalVisible(false);
    router.push("/test");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View>
        <Text>Details Screen</Text>
        <Button title="Tạo phòng" onPress={() => setModalVisible(true)} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Nhập tên người chơi</Text>
              {players.map((player, index) => (
                <TextInput
                  key={index}
                  style={styles.input}
                  placeholder={`Người chơi ${index + 1}`}
                  value={players[index]}
                  onChangeText={(text) => {
                    const newPlayers = [...players];
                    newPlayers[index] = text;
                    setPlayers(newPlayers);
                  }}
                />
              ))}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setModalVisible(false)}
                >
                  <Text>Hủy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.createButton]}
                  onPress={handleCreateRoom}
                >
                  <Text style={styles.createButtonText}>Tạo phòng</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  createButton: {
    backgroundColor: "#A1CEDC",
  },
  createButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
