export function Details({ details, setDetails }) {
  return (
    <>
      <h3>{details.title}</h3>
      <p>{details.desc}</p>
      <button
        type="button"
        onClick={() =>
          setDetails((prev) => {
            return { ...prev, title: (prev.title = 'оавоавоавллвалв') };
          })
        }
      >
        {details.btnTitle}
      </button>
    </>
  );
}
