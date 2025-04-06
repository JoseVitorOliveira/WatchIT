import ContentGrid from "../components/content-grid/ContentGrid";

export default function ContentPage({ category }) {
  return (
    <main className="bg-dark-gray">
      <ContentGrid category={category} />
    </main>
  );
}
