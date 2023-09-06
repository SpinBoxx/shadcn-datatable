import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { filters } from "@/data";
import { EuroIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-5 grid grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-2">
          <CardTitle className="text-sm font-medium">Total objets</CardTitle>
          <EuroIcon className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent>{filters.length}</CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-2">
          <CardTitle className="text-sm font-medium">Total objets</CardTitle>
          <EuroIcon className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent>{filters.length}</CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-2">
          <CardTitle className="text-sm font-medium">Total objets</CardTitle>
          <EuroIcon className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent>{filters.length}</CardContent>
      </Card>
    </div>
  );
}
