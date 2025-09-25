type ContentsItem = {
  type: string;
  content: string;
}

export const normalizeContents = (contents:ContentsItem[])=>{
  return contents.map(item => ({
    ...item,
    // Strip semua tag HTML di field type
    type: item.type.replace(/<[^>]*>/g, '').trim(),
    // Content dibiarkan apa adanya (bisa HTML / URL image)
    content: item.content
  }))
}