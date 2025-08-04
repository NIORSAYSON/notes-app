import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logoutUser } from "../store/authSlice";
import {
  BasilLogoutOutline,
  MaterialSymbolsLightAddNotesOutline,
  MaterialSymbolsSearch,
  SolarNotesBoldDuotone,
} from "../assets/icons";
import { HomeStyles } from "../styles/HomeStyles";
import NotesCard from "../components/NotesCard";
import EmptyState from "../components/EmptyState";
import NoteModal from "../components/NoteModal";

// Define the Note interface to match your store
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const { notes } = useAppSelector((state) => state.notes);
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleAddNote = () => {
    setSelectedNote(null);
    setIsEditing(false);
    setModalVisible(true);
  };

  const handleEditNote = (note: Note) => {
    setSelectedNote(note);
    setIsEditing(true);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedNote(null);
    setIsEditing(false);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchText.toLowerCase()) ||
      note.content.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={[HomeStyles.container, { paddingTop: insets.top }]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />

      {/* Header */}
      <View style={HomeStyles.header}>
        <View style={HomeStyles.headerLeft}>
          <SolarNotesBoldDuotone width={50} height={50} />
          <Text style={HomeStyles.appTitle}>Nior's Notes App</Text>
        </View>
        <TouchableOpacity
          style={HomeStyles.logoutButton}
          onPress={handleLogout}>
          <BasilLogoutOutline />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={HomeStyles.searchContainer}>
        <View style={HomeStyles.searchBar}>
          <View style={{ opacity: 0.5 }}>
            <MaterialSymbolsSearch />
          </View>
          <TextInput
            style={HomeStyles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={HomeStyles.addButton} onPress={handleAddNote}>
          <MaterialSymbolsLightAddNotesOutline />
        </TouchableOpacity>
      </View>

      {/* Notes List */}
      <ScrollView
        style={HomeStyles.notesContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          filteredNotes.length === 0 ? HomeStyles.emptyScrollView : undefined
        }>
        {filteredNotes.length === 0 ? (
          <EmptyState searchText={searchText} handleAddNote={handleAddNote} />
        ) : (
          filteredNotes.map((note) => (
            <NotesCard
              key={note.id}
              note={note}
              onEdit={() => handleEditNote(note)}
            />
          ))
        )}
      </ScrollView>

      {/* Note Modal */}
      <NoteModal
        visible={modalVisible}
        onClose={handleCloseModal}
        note={selectedNote}
        isEditing={isEditing}
      />
    </View>
  );
}
