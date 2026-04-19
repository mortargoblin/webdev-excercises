import { useState, useEffect } from 'react';
import MediaRow from '../components/MediaRow';
import fetchData from '../utils/fetchData';

function Home() {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData('/test.json');
        setMediaArray(json);
        console.log(json);
      } catch (error) {
        console.error('Fetching media failed:', error);
      }
    };

    getMedia();
  }, []);

  return (
    <>
      <h2>My Media</h2>

      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
