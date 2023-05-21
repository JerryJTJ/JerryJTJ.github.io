import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        maxWidth: 350,
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
    company: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    role: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    cardContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
