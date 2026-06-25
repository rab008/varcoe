/**
 * Renders the post body. The HTML is **already sanitised server-side** in the
 * blog service (allowlist; no scripts/iframes/handlers), so this is the sanctioned
 * use of `dangerouslySetInnerHTML`. Prose styling is applied via child-element
 * utility classes (no Tailwind typography plugin). Static Server Component.
 */
export function PostBody({ html }: { html: string }) {
  return (
    <div
      className={
        "max-w-none text-base leading-relaxed text-muted " +
        "[&_p]:my-5 " +
        "[&_h2]:scroll-mt-24 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink " +
        "[&_h3]:scroll-mt-24 [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink " +
        "[&_h4]:scroll-mt-24 [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-ink " +
        "[&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-cta " +
        "[&_strong]:text-ink [&_strong]:font-semibold " +
        "[&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-2 [&_li]:marker:text-primary " +
        "[&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-ink " +
        "[&_img]:my-6 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-lg [&_figure]:my-6 [&_figcaption]:mt-2 [&_figcaption]:text-center [&_figcaption]:text-sm " +
        "[&_hr]:my-8 [&_hr]:border-border " +
        "[&_pre]:my-5 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-dark [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-white " +
        "[&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:bg-surface [&_th]:p-2 [&_th]:text-left [&_td]:border [&_td]:border-border [&_td]:p-2"
      }
      // Sanitised in src/features/blog/services/wordpress.ts before render.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
