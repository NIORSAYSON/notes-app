import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useAppDispatch } from "../store/hooks";
import { addNote, updateNote } from "../store/notesSlice";
import { NoteModalStyles } from "../styles/NoteModalStyle";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface NoteModalProps {
  visible: boolean;
  onClose: () => void;
  note?: Note | null;
  isEditing?: boolean;
}

export default function NoteModal({
  visible,
  onClose,
  note,
  isEditing = false,
}: NoteModalProps) {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (isEditing && note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [visible, note, isEditing]);

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a title for your note");
      return;
    }

    if (isEditing && note) {
      dispatch(
        updateNote({
          id: note.id,
          title: title.trim(),
          content: content.trim(),
          updatedAt: new Date().toISOString(),
        })
      );
    } else {
      dispatch(
        addNote({
          id: Date.now().toString(),
          title: title.trim(),
          content: content.trim(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        })
      );
    }

    onClose();
  };

  const handleClose = () => {
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}>
      <View style={NoteModalStyles.container}>
        <View style={NoteModalStyles.header}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={NoteModalStyles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={NoteModalStyles.title}>
            {isEditing ? "Edit Note" : "New Note"}
          </Text>
          <TouchableOpacity onPress={handleSave}>
            <Text style={NoteModalStyles.saveButton}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={NoteModalStyles.content}>
          <TextInput
            style={NoteModalStyles.titleInput}
            placeholder="Note title..."
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#999"
            maxLength={100}
          />

          <TextInput
            style={NoteModalStyles.contentInput}
            placeholder="Start writing your note..."
            value={content}
            onChangeText={setContent}
            placeholderTextColor="#999"
            multiline
            textAlignVertical="top"
          />
        </View>
      </View>
    </Modal>
  );
}
