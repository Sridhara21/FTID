import { useUser, useFirestore, useMemoFirebase } from "@/local";
import { useDoc } from "@/local/firestore/use-doc";
import { doc } from "@/local/store";

export function useCitizen() {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();

  const citizenRef = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return doc(db, "citizens", user.uid);
  }, [db, user?.uid]);

  const { data: citizenData, isLoading: isCitizenLoading } = useDoc(citizenRef);

  return {
    user,
    citizenData,
    isLoading: isUserLoading || isCitizenLoading,
  };
}
