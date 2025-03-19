export function Details({ details, onLoading }) {
  return (
    <>
      <h3>{details.title}</h3>
      <p>{details.desc}</p>
      <button type="button" onClick={onLoading}>
        {details.btnTitle}
      </button>
    </>
  );
}
