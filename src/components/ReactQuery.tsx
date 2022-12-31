import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Albam = {
  userId: number;
  id: number;
  title: string;
};

const fetchAlbam = async () => {
  const result = await axios.get<Albam[]>(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return result.data;
};

export const ReactQuery = () => {
  const { isLoading, error, data } = useQuery<Albam[]>(["albam"], fetchAlbam);

  if (error) return <p>エラーです</p>;
  if (isLoading) return <p>ローディング中です</p>;

  return (
    <>
      <div>
        <p>ReactQuery</p>
        {data?.map((albam) => (
          <p key={albam.id}>{albam.title}</p>
        ))}
      </div>
    </>
  );
};
