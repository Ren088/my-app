function Card({ title, description }) {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-md max-w-xs">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;