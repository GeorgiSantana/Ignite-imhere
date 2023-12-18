import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
      container: {
        backgroundColor: "#131016",
        flex: 1,
        padding: 24,
        //justifyContent: 'center',
        //alignItems: 'center'
      },

      eventName: {
        color: "#FDFCFE",
        fontSize: 24,
        marginTop: 48,
        fontWeight: 'bold',
      },

      eventDate: {
        fontSize: 16,
        color:"#6B6B6B",
      },

      input: {
        flex: 1,
        backgroundColor: "#1F1E25",
        height: 56,
        borderRadius: 5,
        color: "#FFF",
        padding: 16,
        fontSize: 16,
        marginRight: 12,

      },

      buttonText: {
        color: "#fff",
        fontSize: 24,
        justifyContent: 'center',
        
      },

      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31cf67",
        justifyContent: 'center',
        alignItems: 'center',

      },

      form: {
        width: '100%',
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 42

      }
     
})