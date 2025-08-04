import { StyleSheet } from "react-native";

export const NoteModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  cancelButton: {
    fontSize: 16,
    color: "#666",
  },
  saveButton: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "600",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingBottom: 10,
  },
  contentInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});
