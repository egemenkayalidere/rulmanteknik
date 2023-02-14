import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  console.log("getStaticPaths");
  // const result = await fetch(
  //   "https://www.breakingbadapi.com/api/characters?limit=20"
  // );
  // const data = await result.json();

  // const paths = data.map((item: any) => {
  //   return { params: { id: item.char_id.toString() } };
  // });

  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  console.log("getStaticProps");
  // const id = context.params.id;
  // const result = await fetch(
  //   "https://www.breakingbadapi.com/api/characters/" + id
  // );
  // const data = await result.json();

  return {
    props: { user: [] },
  };
};

const SingleItem = ({ user }: any) => {
  const router = useRouter();
  console.log("router", router);
  console.log("user", user);
  return <div>SingleItem - {user[0].name}</div>;
};

export default SingleItem;
