declare module 'pdfkit' {
  import { Readable } from 'stream';

  interface PDFDocumentOptions {
    margin?: number;
    info?: {
      Title?: string;
    };
  }

  interface TextOptions {
    align?: 'left' | 'center' | 'right' | 'justify';
    underline?: boolean;
  }

  class PDFDocument extends Readable {
    constructor(options?: PDFDocumentOptions);
    fontSize(size: number): this;
    fillColor(color: string): this;
    text(text: string, options?: TextOptions): this;
    moveDown(lines?: number): this;
    end(): void;
    on(event: 'data', listener: (chunk: Buffer) => void): this;
    on(event: 'end', listener: () => void): this;
  }

  export default PDFDocument;
}
