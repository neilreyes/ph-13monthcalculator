export default function Loading({ isLoading }) {
  return (
    <div className="position-absolute loading-overlay">
      <div className="loading-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
