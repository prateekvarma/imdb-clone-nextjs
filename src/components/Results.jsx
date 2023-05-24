import Card from "./Card";

function Results({ results }) {
  return (
    <div>
      {results.map((result) => {
        return <Card key={result.id} result={result} />;
      })}
    </div>
  );
}

export default Results;
