import { ref, set } from "firebase/database";
import { database } from "../firebase.config";

const addProspect = async (
  prospectData: Record<string, any>
): Promise<void> => {
  try {
    const currentDate = new Date();
    const id = currentDate.toISOString().split("T")[0]; // Format YYYY-MM-DD
    await set(ref(database, `prospect/${id}`), prospectData);
    console.log("Prospect added successfully");
  } catch (error) {
    console.error("Error adding prospect: ", error);
  }
};

export default addProspect;
