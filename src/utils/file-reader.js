class FileReaderSync {
  constructor(inputFile) {
    this.temporaryFileReader = new FileReader();
    this.inputFile = inputFile;
  }

  read = action => {
    return new Promise((resolve, reject) => {
      this.temporaryFileReader.onerror = () => {
        this.temporaryFileReader.abort();
        reject(new DOMException('Problem parsing input file.'));
      };

      this.temporaryFileReader.onload = () => {
        resolve(this.temporaryFileReader.result);
      };
      this.temporaryFileReader[action](this.inputFile);
    });
  };

  readAsText = () => this.read('readAsText');

  readAsBinaryString = () => this.read('readAsBinaryString');

  readAsDataURL = () => this.read('readAsDataURL');

  readAsArrayBuffer = () => this.read('readAsArrayBuffer');
}

export default FileReaderSync;
