import { View, Text, TouchableOpacity, Alert } from "react-native";
import { HomeStyles } from "../styles/HomeStyles";
import { FeEdit, MaterialSymbolsDeleteOutline } from "../assets/icons";
import { useAppDispatch } from "../store/hooks";
import { deleteNote } from "../store/notesSlice";

type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

interface NotesCardProps {
  note: Note;
  onEdit: () => void;
}

export default function NotesCard({ note, onEdit }: NotesCardProps) {
  const dispatch = useAppDispatch();

  const handleDeleteNote = (noteId: string) => {
    Alert.alert("Delete Note", "Are you sure you want to delete this note?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          dispatch(deleteNote(noteId));
        },
      },
    ]);
  };

  return (
    <View key={note.id} style={HomeStyles.noteCard}>
      <View style={HomeStyles.noteHeader}>
        <Text style={HomeStyles.noteTitle}>{note.title}</Text>
        <View style={HomeStyles.noteActions}>
          <TouchableOpacity style={HomeStyles.actionButton} onPress={onEdit}>
            <FeEdit />
          </TouchableOpacity>
          <TouchableOpacity
            style={HomeStyles.actionButton}
            onPress={() => handleDeleteNote(note.id)}>
            <MaterialSymbolsDeleteOutline />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={HomeStyles.noteContent}
        numberOfLines={2}
        ellipsizeMode="tail">
        {note.content}
      </Text>
    </View>
  );
}
