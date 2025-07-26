// app/preview/[id]/page.tsx
import { getIdea } from '@/lib/api';

export default async function PreviewPage({ params }: { params: { id: string } }) {
  const idea = await getIdea(params.id);

  return (
    <iframe
      srcDoc={idea.html}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
      }}
      title="Landing Page Preview"
    />
  );
}
