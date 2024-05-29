import { get, push, ref, remove, set } from "firebase/database";
import { database } from "../firebase.config";

export const addProspect = async (
  prospectData: Record<string, any>
): Promise<string | null> => {
  try {
    const currentDate = new Date();
    const dateId = currentDate.toISOString().split("T")[0]; // Format YYYY-MM-DD
    const refPath = `prospect/${dateId}`;
    const newRef = push(ref(database, refPath)); // Create a new reference with a unique ID
    const uniqueId = newRef.key; // Get the unique ID generated by Firebase

    if (!uniqueId) {
      throw new Error("Failed to generate unique ID");
    }

    await set(newRef, prospectData);
    console.log("Prospect added successfully");
    return `${dateId}/${uniqueId}`;
  } catch (error) {
    console.error("Error adding prospect: ", error);
    return null;
  }
};

export const removeUserFromPath = async (path: string): Promise<void> => {
  try {
    await remove(ref(database, path));
    console.log("User removed successfully from path:", path);
  } catch (error) {
    console.error("Error removing user from path: ", error);
  }
};

export const addUserToNewPath = async (
  userData: Record<string, any>,
  newPath: string
) => {
  try {
    await set(ref(database, newPath), userData);
    console.log("User added successfully to new path:", newPath);
  } catch (error) {
    console.error("Error adding user to new path: ", error);
  }
};

// Fonction pour récupérer les données par ID
export const getDataById = async (
  id: string
): Promise<Record<string, any> | null> => {
  try {
    const dataRef = ref(database, `/client/${id}`);
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available for the provided ID");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
};
