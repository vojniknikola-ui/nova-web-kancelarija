import PDFDocument from 'pdfkit';
import { NextResponse } from 'next/server';
import { getLawBySlug } from '../../../lib/laws';

export async function POST(request: Request) {
  const { lawSlug, lawTitle } = await request.json();
  const law = getLawBySlug(lawSlug);

  if (!law) {
    return NextResponse.json({ message: 'Nepostojeći zakon' }, { status: 404 });
  }

  const doc = new PDFDocument({ margin: 50, info: { Title: lawTitle } });
  const chunks: Buffer[] = [];

  doc.on('data', (chunk) => chunks.push(chunk as Buffer));
  const streamFinished = new Promise<Buffer>((resolve) => {
    doc.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
  });

  doc.fontSize(18).fillColor('#0b3d60').text('Andrić Law – LawViewer', { align: 'center' });
  doc.moveDown();
  doc.fontSize(16).fillColor('#111827').text(law.title, { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).fillColor('#4b5563').text(`Kategorija: ${law.category} | Godina: ${law.year}`);
  doc.moveDown();

  law.sections.forEach((section) => {
    doc
      .fontSize(14)
      .fillColor('#0b3d60')
      .text(section.heading, { underline: true })
      .moveDown(0.5);
    doc.fontSize(12).fillColor('#111827').text(section.content, {
      align: 'justify',
    });
    doc.moveDown();
  });

  doc.moveDown();
  doc.fontSize(10).fillColor('#6b7280').text('© Andrić Law | andriclaw.com', { align: 'center' });

  doc.end();
  const pdfBuffer = await streamFinished;

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${law.slug}.pdf"`,
    },
  });
}
