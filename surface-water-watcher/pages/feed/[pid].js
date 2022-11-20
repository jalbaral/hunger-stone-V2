export const Feed = ({ pageNumber, articles }) => {
  return <>hello world</>;
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.pid;
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
};

const apiResponse = await fetch(
  "https://api.newscatcherapi.com/v2/search?q=Tesla&lang=en&sort_by=relevancy&page=1",
  {
    headers: {
      Authorization: `Bearer ${process.env.NEWS_CATCHER_KEY}`,
    },
  }
);

export default Feed;
