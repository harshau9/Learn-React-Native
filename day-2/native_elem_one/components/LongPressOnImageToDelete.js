import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const data = [
  "https://cdn.pixabay.com/photo/2022/11/25/16/30/brown-hairstreak-7616422_960_720.jpg",
  "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg",
];

const LongPressOnImageToDelete = () => {
  const [images, setImages] = useState(data);

  const deleteImage = (i) => {
    setImages((prev) => prev.filter((_, index) => index !== i));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Simple Gallery</Text>
      <View>
        {images.map((img, index) => (
          <Pressable onLongPress={() => deleteImage(index)} key={index}>
            <Image
              source={{ uri: img }}
              style={{ width: "100%", height: 120, resizeMode: "cover" }}
            />
          </Pressable>
        ))}
        {images.length === 0 && (
          <Text style={{ textAlign: "center", marginTop: 40 }}>
            No Images found in gallery
          </Text>
        )}
      </View>
    </View>
  );
};

export default LongPressOnImageToDelete;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
