import { cn } from "@/lib/utils";

export interface PageHeroProps {
  /** Short label above the title (e.g. "About Solario", "Financing") */
  eyebrow?: string;
  /** Main page heading */
  title: string;
  /** Supporting line directly under the title, slightly emphasized */
  subtitle?: string;
  /** Longer description paragraph below subtitle */
  description?: string;
  /** Custom content below description (e.g. stats, checkmarks, CTA) */
  children?: React.ReactNode;
  /** Show accent divider at bottom of hero (default true) */
  showDivider?: boolean;
  /** Tighter padding for simpler pages (default false) */
  compact?: boolean;
  /** Optional section class name */
  className?: string;
}

const PageHero = ({
  eyebrow,
  title,
  subtitle,
  description,
  children,
  showDivider = true,
  compact = false,
  className,
}: PageHeroProps) => {
  return (
    <section
      className={cn(
        "pt-24 sm:pt-28 bg-navy relative overflow-hidden",
        compact ? "pb-10 sm:pb-12" : "pb-12 sm:pb-14 md:pb-16",
        className
      )}
    >
      {/* Subtle gradient for depth and transition into next section */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/[0.03]"
        aria-hidden
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
              {eyebrow}
            </p>
          )}

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-foreground/90 font-medium mb-3 sm:mb-4 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-xl mx-auto">
              {description}
            </p>
          )}

          {children && <div className={cn(description ? "mb-5 sm:mb-6" : "", "max-w-xl mx-auto")}>{children}</div>}

          {showDivider && (
            <div
              className={cn(
                "h-px w-16 mx-auto bg-primary/50 rounded-full",
                children && "mt-6 sm:mt-8"
              )}
              aria-hidden
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
