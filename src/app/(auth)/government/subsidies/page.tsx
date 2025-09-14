import { SubsidyOptimizationCard } from "@/components/government/subsidy-optimization-card";
import { CurrentSubsidyDetails } from "@/components/government/current-subsidy-details";
import { Separator } from "@/components/ui/separator";

export default function SubsidiesPage() {
    return (
        <div className="grid grid-cols-1 gap-8">
            <CurrentSubsidyDetails />
            <Separator />
            <SubsidyOptimizationCard />
        </div>
    );
}
