"use client";

import { AiAdvisorCard } from "@/components/citizen/ai-advisor-card";
import { AiAdvisorChat } from "@/components/citizen/ai-advisor-chat";
import { IncomeExpenseChart } from "@/components/citizen/income-expense-chart";
import { useUser, useFirestore, useCollection, useMemoFirebase } from "@/local";
import { collection, query, where, orderBy, limit } from "@/local/store";

export default function AiAdvisorPage() {
    const { user } = useUser();
    const db = useFirestore();

    const transactionsQuery = useMemoFirebase(() => {
      if (!db || !user?.uid) return null;
      return query(
        collection(db, "transactions"), 
        where("citizenId", "==", user.uid),
        orderBy("timestamp", "desc"),
        limit(50)
      );
    }, [db, user?.uid]);

    const { data: transactionsData } = useCollection(transactionsQuery);

    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
            <div className="lg:col-span-3 flex flex-col gap-6">
                <IncomeExpenseChart transactions={transactionsData} />
                <AiAdvisorChat />
            </div>
            <div className="lg:col-span-2">
                <AiAdvisorCard />
            </div>
        </div>
    );
}

