import PDFParser from 'pdf2json';

export default class PdfHelpers {
  private _pdfParser: PDFParser;

  constructor() {
    this._pdfParser = new PDFParser();
  }

  async getPDFContents(options: {pdfFilePath: string}): Promise<any> {
    return new Promise((resolve, reject) => {
      this._pdfParser.on('pdfParser_dataError', (errData: {parserError: any}) =>
        reject(errData.parserError)
      );
      this._pdfParser.on('pdfParser_dataReady', (pdfData) => {
        resolve(pdfData);
      });

      this._pdfParser.loadPDF(options.pdfFilePath);
    });
  }
}
