import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

type Albam = {
  userId: number;
  id: number;
  title: string;
};

const fetchAlbam = async () => {
  const result = await axios
    .get<Albam[]>("https://jsonplaceholder.typicode.com/albums")
    .then(await sleep(5000));
  return result.data;
};

export const AlbamList = () => {
  const { data } = useQuery<Albam[]>(["albam"], fetchAlbam);

  return (
    <div
      style={{
        height: "300px",
        border: "2px solid gray",
        background: "cornsilk",
        overflowY: "scroll",
      }}
    >
      <h2>アルバム</h2>
      {data?.map((albam) => (
        <p key={albam.id}>{albam.title}</p>
      ))}
    </div>
  );
};
