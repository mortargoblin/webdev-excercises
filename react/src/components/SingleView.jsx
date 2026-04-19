const SingleView = (props) => {
  const { item, setSelectedItem } = props;

  if (!item) return null;

  const isVideo = item.media_type.includes('video');

  return (
    <dialog open>
      <h3>{item.title}</h3>

      <p>{item.description}</p>

      {isVideo ? (
        <video controls width="600">
          <source src={item.filename} type={item.media_type} />
          Your browser does not support video.
        </video>
      ) : (
        <img src={item.filename} alt={item.title} width="600" />
      )}

      <br />
      <button onClick={() => setSelectedItem(null)}>
        Close
      </button>
    </dialog>
  );
};

export default SingleView;
