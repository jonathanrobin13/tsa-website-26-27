import getData from './api.jsx';
import {useState, useEffect, useRef} from 'react';

function App() {
	
	const [img, setImage] = useState();	
	
	getData(8).then(data => {
		const img_link = data;
		setImage(img_link);
	});
	
  return (
    <>
		<h1 className="text-3xl font-bold underline">Hi</h1>
		<img src={img} />
    </>
  );
}

export default App
