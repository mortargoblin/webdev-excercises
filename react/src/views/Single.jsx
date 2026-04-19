import { useLocation, useNavigate } from 'react-router';

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const item = state?.item;

  if (!item) {
    return <p>No item data</p>;
  }

  const isVideo = item.media_type.includes('video');

  return (
    <div>
      <h2>{item.title}</h2>

      <p>{item.description}</p>

      {isVideo ? (
        <video controls width="600">
          <source src={item.filename} type={item.media_type} />
        </video>
      ) : (
        <img src={item.filename} alt={item.title} width="600" />
      )}

      <br />
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Single;
