export const getArticleImageURL = (content: string) => {
  const regex = /<img.*?src="(.*?)"/;
  const found = content.match(regex);

  return found ? found[1] : "";
};
