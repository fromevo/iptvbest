"use client";

import { useState } from "react";

type Quality = "sd" | "hd" | "4k";

export function BandwidthCalculator() {
  const [devices, setDevices] = useState(2);
  const [quality, setQuality] = useState<Quality>("hd");
  const [currentSpeed, setCurrentSpeed] = useState<string>("");

  const perStreamMbps =
    quality === "sd" ? 4 : quality === "hd" ? 8 : 25;

  const recommended = Math.max(10, devices * perStreamMbps + 5);
  const current = Number(currentSpeed.replace(",", "."));
  const hasCurrent = !Number.isNaN(current) && current > 0;
  const enough = hasCurrent ? current >= recommended : null;

  return (
    <div className="card p-4 sm:p-5 space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
          📶 Калькулятор скорости для IPTV
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Оцените, какой тариф интернета нужен для комфортного просмотра IPTV на
          ваших устройствах.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 text-xs sm:text-sm">
        <div className="space-y-1">
          <label className="text-slate-600">
            Количество устройств, которые смотрят одновременно
          </label>
          <input
            type="number"
            min={1}
            max={10}
            value={devices}
            onChange={(e) =>
              setDevices(
                Math.min(10, Math.max(1, Number(e.target.value) || 1))
              )
            }
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
          />
        </div>
        <div className="space-y-1">
          <label className="text-slate-600">
            Максимальное качество, которое вы планируете смотреть
          </label>
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value as Quality)}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
          >
            <option value="sd">SD (до 720p)</option>
            <option value="hd">HD (1080p)</option>
            <option value="4k">4K / Ultra HD</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-slate-600">
            Ваш текущий тариф (Мбит/с), если знаете
          </label>
          <input
            type="text"
            value={currentSpeed}
            onChange={(e) => setCurrentSpeed(e.target.value)}
            placeholder="Например: 50"
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
          />
        </div>
      </div>

      <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-3 text-xs sm:text-sm text-emerald-100 space-y-1.5">
        <div className="font-semibold">
          Рекомендованная скорость: ~{recommended} Мбит/с и выше
        </div>
        <p>
          Расчёт сделан с запасом для {devices}{" "}
          {devices === 1 ? "устройства" : "устройств"} при качестве{" "}
          {quality === "sd"
            ? "SD"
            : quality === "hd"
            ? "HD"
            : "4K / Ultra HD"}{" "}
          и небольшой погрешности сети.
        </p>
        {hasCurrent && (
          <p>
            Ваш текущий тариф: {current} Мбит/с —{" "}
            {enough
              ? "в целом должен быть достаточен при нормальном качестве линии."
              : "может быть недостаточен, стоит рассмотреть более высокий тариф или снижать качество потоков."}
          </p>
        )}
      </div>

      <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1">
        <li>
          Для 4K‑каналов критична не только скорость, но и стабильность — лучше
          подключать телевизор к роутеру по кабелю.
        </li>
        <li>
          Если в доме активно пользуются интернетом другие устройства (игры,
          загрузки, видеосвязь), закладывайте дополнительный запас по скорости.
        </li>
      </ul>
    </div>
  );
}

