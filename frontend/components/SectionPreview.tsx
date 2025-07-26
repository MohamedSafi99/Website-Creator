// components/SectionPreview.tsx
export default function SectionPreview({ html, css }: { html: string; css: string }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
