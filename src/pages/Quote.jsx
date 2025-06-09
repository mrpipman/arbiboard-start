// Quote.jsx – Pagina principale con selezione bookmaker e quote
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const bookmakers = [
  { id: "bet365", name: "Bet365" },
  { id: "pinnacle", name: "Pinnacle" },
  { id: "williamhill", name: "William Hill" },
];

const matches = [
  { id: 1, home: "Team A", away: "Team B", odds: { bet365: 1.85, pinnacle: 1.88, williamhill: 1.80 } },
  { id: 2, home: "Team C", away: "Team D", odds: { bet365: 2.10, pinnacle: 2.05, williamhill: 2.00 } },
];

export default function Quote() {
  const { t } = useTranslation();
  const [selectedBookie, setSelectedBookie] = useState("bet365");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t("quote.title")}</h1>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">{t("quote.selectBookie")}</label>
        <Select value={selectedBookie} onValueChange={setSelectedBookie}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder={t("quote.selectBookiePlaceholder")} />
          </SelectTrigger>
          <SelectContent>
            {bookmakers.map(b => (
              <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {matches.map(match => (
          <Card key={match.id}>
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{match.home} vs {match.away}</h2>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">{t("quote.odds")}: {selectedBookie}</div>
                <div className="text-xl font-bold">{match.odds[selectedBookie]}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}