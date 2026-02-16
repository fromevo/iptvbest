import type { Metadata } from "next";
import { BandwidthCalculator } from "../../../components/BandwidthCalculator";

export const metadata: Metadata = {
  title: "Калькулятор скорости интернета для IPTV",
  description:
    "Рассчитайте, какой тариф интернета нужен для комфортного просмотра IPTV с учётом количества устройств и качества (SD, HD, 4K).",
  alternates: {
    canonical: "https://iptv-best.ru/tools/bandwidth"
  }
};

export default function BandwidthPage() {
  return (
    <div className="space-y-5 sm:space-y-7 max-w-3xl">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
          📶 Калькулятор скорости интернета для IPTV
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Укажите, сколько устройств будет одновременно смотреть IPTV и в каком
          качестве, — мы подскажем ориентировочную скорость, которой должно
          хватить для комфортного просмотра.
        </p>
      </div>
      <BandwidthCalculator />
    </div>
  );
}

