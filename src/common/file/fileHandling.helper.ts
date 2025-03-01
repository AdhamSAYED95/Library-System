import { promises as fs } from 'fs';

export async function readingFromFile(
  filePath: string,
): Promise<Record<string, any>> {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return data ? JSON.parse(data) : {};
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.warn('File not found, creating a new one');
      return {};
    }
    throw new Error(`Error reading file: ${err.message}`);
  }
}

export async function writingToFile(
  data: Record<string, any>,
  filePath: string,
): Promise<void> {
  try {
    return await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    throw new Error(`Error writing file: ${err.message}`);
  }
}
