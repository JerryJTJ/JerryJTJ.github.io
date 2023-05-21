import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    opacity: 50,
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width: screenWidth * 0.6,
    maxWidth: screenWidth * 0.6
  },
  cardRow: {
    flexDirection: "row",
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },

  //Text Editing
  company: {
    fontSize: 20,
    marginBottom: 2,
    fontfamily: 'Crimson Text',
  },
  role: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sideContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sideText: {
    color: "#000",
    fontStyle: "italic",
    fontSize: 16,
    textAlign: "right"
  },
});

export default styles;
