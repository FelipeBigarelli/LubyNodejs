import fs from 'fs';

export const deleteFile = async (filename: string) => {
  // stat: verifica se um arquivo existe na url/diretório que passar
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  await fs.promises.unlink(filename);
};
