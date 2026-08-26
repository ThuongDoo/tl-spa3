import { useState } from "react";
import { IconChevronLeft, IconChevronRight, IconLotus } from "./icons";
import { SERVICE_ICONS } from "../data/serviceIcons";
import { isImageValue } from "../utils/imgSrc";

const PER_PAGE = 3;

function ServiceCard({ item }) {
  const Icon = SERVICE_ICONS[item.icon] || IconLotus;
  const hasImg = isImageValue(item.img);

  return (
    <div className="group overflow-hidden rounded-3xl border border-sand bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={
          !hasImg
            ? {
                background:
                  "linear-gradient(135deg, var(--c-200), var(--c-50))",
              }
            : undefined
        }
      >
        {hasImg && (
          <img
            src={item.img}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        )}
        {/* <div
          className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 shadow-sm"
          style={{ color: "var(--c-600)" }}
        >
          <Icon className="h-5 w-5" />
        </div> */}
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-charcoal">{item.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
          {item.desc}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--c-600)" }}
          >
            {item.price}
          </span>
          <a
            href="#booking"
            className="text-sm font-medium text-charcoal/60 transition hover:text-charcoal"
          >
            Đặt ngay →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services({ data }) {
  const items = data.services.items;
  const totalPages = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const [page, setPage] = useState(0);
  const pages = Array.from({ length: totalPages }, (_, i) =>
    items.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE),
  );
  const showArrows = totalPages > 1;

  function go(dir) {
    setPage((p) => (p + dir + totalPages) % totalPages);
  }

  return (
    <section id="services" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--c-600)" }}
          >
            Dịch vụ nổi bật
          </span>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">
            {data.services.heading}
          </h2>
          <p className="mt-4 text-charcoal/70">{data.services.subtitle}</p>
        </div>

        <div className="relative mt-14">
          {showArrows && (
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Dịch vụ trước"
              className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sand bg-white text-charcoal shadow-md transition hover:brightness-95"
            >
              <IconChevronLeft className="h-5 w-5" />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, gi) => (
                <div
                  key={gi}
                  className="grid w-full shrink-0 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {group.map((item, i) => (
                    <ServiceCard key={i} item={item} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {showArrows && (
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Dịch vụ tiếp theo"
              className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-sand bg-white text-charcoal shadow-md transition hover:brightness-95"
            >
              <IconChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>

        {showArrows && (
          <div className="mt-8 flex justify-center gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Trang ${i + 1}`}
                className="h-2 rounded-full transition-all"
                style={{
                  width: i === page ? "1.5rem" : "0.5rem",
                  background: i === page ? "var(--c-500)" : "var(--c-200)",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
