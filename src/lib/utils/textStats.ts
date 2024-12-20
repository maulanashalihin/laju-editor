export function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

export function countCharacters(text: string): number {
  return stripHtml(text).length;
}

export function countWords(text: string): number {
  const cleanText = stripHtml(text)
    .trim()
    .replace(/\s+/g, ' '); // Replace multiple spaces with single space

  console.log(cleanText)
  return cleanText ? cleanText.split(' ').length  : 0;
}