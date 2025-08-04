import { Text, TouchableOpacity, View } from "react-native";
import {
  MaterialSymbolsLightAddNotesOutline,
  SolarNotesBoldDuotone,
} from "../assets/icons";
import { HomeStyles } from "../styles/HomeStyles";

type EmptyStateProps = {
  searchText?: string;
  handleAddNote: () => void;
};

export default function EmptyState({
  searchText,
  handleAddNote,
}: EmptyStateProps) {
  return (
    <View style={HomeStyles.emptyStateContainer}>
      <View style={HomeStyles.emptyIconContainer}>
        <SolarNotesBoldDuotone width={80} height={80} />
      </View>
      <Text style={HomeStyles.emptyStateTitle}>
        {searchText ? "No notes found" : "No notes yet"}
      </Text>
      <Text style={HomeStyles.emptyStateSubtitle}>
        {searchText
          ? `No notes match "${searchText}"`
          : "Start by creating your first note"}
      </Text>
      {!searchText && (
        <TouchableOpacity
          style={HomeStyles.createNoteButton}
          onPress={handleAddNote}>
          <View style={HomeStyles.createButtonIcon}>
            <MaterialSymbolsLightAddNotesOutline
              width={24}
              height={24}
              color="#fff"
            />
          </View>
          <Text style={HomeStyles.createButtonText}>Create Note</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
