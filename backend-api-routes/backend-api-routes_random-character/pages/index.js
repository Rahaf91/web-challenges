import useSWR from "swr";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  align-items: center;
`;
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  return (
    <Container>
      <h1> Get Random Character</h1>
      <p>
        <strong>First Name:</strong> {data.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {data.lastName}
      </p>
      <p>
        <strong>Age: </strong>
        {data.age}
      </p>
      <p>
        <strong>Gender:</strong> {data.gender}
      </p>
      <p>
        <strong>Birthday:</strong> {data.birthday}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Twitter:</strong> {data.twitter}
      </p>
      <p>
        <strong>Geohash:</strong> {data.geohash}
      </p>
    </Container>
  );
}
