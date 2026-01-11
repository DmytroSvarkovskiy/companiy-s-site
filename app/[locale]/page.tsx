import { ChevronRight } from "lucide-react";
import { GlassCard, ThemeToggle } from "@/entities";
import { Button, Input } from "@/shared";
import { ButtonRevealIcon } from "@/shared/index.client";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground ">
      {/* dark textured background */}
      <div className="absolute inset-0 -z-10 bg-[#0b0f1d]" />

      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(120,140,255,0.22) 0, transparent 45%)," +
            "radial-gradient(circle at 80% 25%, rgba(255,110,3,0.16) 0, transparent 40%)," +
            "radial-gradient(circle at 60% 85%, rgba(255,255,255,0.08) 0, transparent 45%)," +
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 10px, rgba(0,0,0,0.06) 10px 20px)",
        }}
      />

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-6">
        <h1 className="text-3xl font-bold text-title">Dark glass test</h1>
        <p className="text-muted-foreground">Скроль вниз — на фоні має бути видно заломлення.</p>
        <Button type="button">sdf</Button>
        <ButtonRevealIcon
          variant="default"
          className="w-40"
          icon={<ChevronRight className="size-6" />}
        >
          Continue
        </ButtonRevealIcon>
        <ThemeToggle />
        {/* normal glass */}
        <Input />
        <GlassCard
          blur={2}
          className="h-37.5 sticky z-50 top-5 "
          contentClassName="p-6 flex  items-center justify-between"
        >
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">card</div>
            <div className="text-xl font-semibold">Full glass</div>
            <div className="text-sm text-muted-foreground mt-1">Тут увесь блок glass.</div>
          </div>

          <button
            type="button"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15 transition"
          >
            Action
          </button>
        </GlassCard>

        <GlassCard className="h-55 " contentClassName="p-3">
          <div className="h-full rounded-2xl bg-black/45 border border-white/10 p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">edge-only</div>
            <div className="text-xl font-semibold">Glass only on edges</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Центр більш solid, а скло видно по краях (за рахунок padding).
            </p>
          </div>
        </GlassCard>

        {/* filler for scroll */}
        <div className="space-y-3 pt-2  ">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4 ">
              <div className="font-semibold">Scroll block {i + 1}</div>
              <div className="text-sm text-muted-foreground">filler</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
