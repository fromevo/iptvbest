import type { Metadata } from "next";
import { ProviderWizard } from "../../components/ProviderWizard";

export const metadata: Metadata = {
  title: "Подбор IPTV провайдера по вашим требованиям",
  description:
    "Пройдите короткий опрос и получите список IPTV провайдеров, подходящих под ваш бюджет, требования к 4K, архиву и мультируму.",
  alternates: {
    canonical: "https://iptv-best.ru/wizard"
  }
};

export default function WizardPage() {
  return (
    <div className="space-y-5 sm:space-y-7 max-w-3xl">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
          🧠 Подбор IPTV провайдера
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Ответьте на несколько вопросов, а мы предложим несколько провайдеров,
          которые лучше всего подходят под ваши задачи. После этого обязательно
          оформите тесты и сравните сервисы в реальных условиях.
        </p>
      </div>
      <ProviderWizard />
    </div>
  );
}

