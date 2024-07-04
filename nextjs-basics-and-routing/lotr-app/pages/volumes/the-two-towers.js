import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function TheTwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-two-towers"
  );
  if (!volume) {
    return <div>Volume not found</div>;
  }

  const prevVolume = volumeIndex > 0 && volumes[volumeIndex - 1];
  const nextVolume =
    volumeIndex < volumes.length - 1 && volumes[volumeIndex + 1];
  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        alt={`${volume.title} cover`}
        width={140}
        height={230}
      />
      <div>
        {prevVolume && (
          <Link href={`/volumes/${prevVolume.slug}`}>←Previous</Link>
        )}
        <br />
        {nextVolume && <Link href={`/volumes/${nextVolume.slug}`}>Next→</Link>}
      </div>
    </div>
  );
}
