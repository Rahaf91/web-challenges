import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          const randomVolume = getRandomElement(volumes);
          router.push(`/volumes/${randomVolume.slug}`);
        }}
      >
        Go to Random Page
      </button>
    </div>
  );
}
