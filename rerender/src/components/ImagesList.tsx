const LazyImageList = () => {
  const images = [
    'https://picsum.photos/id/10/600/400',
    'https://picsum.photos/id/11/600/400',
    'https://picsum.photos/id/12/600/400',
    'https://picsum.photos/id/13/600/400',
    'https://picsum.photos/id/15/600/400',
    'https://picsum.photos/id/16/600/400',
    'https://picsum.photos/id/17/600/400',
    'https://picsum.photos/id/18/600/400',
    'https://picsum.photos/id/19/600/400',
    'https://picsum.photos/id/20/600/400',
  ];

  return (
    <div>
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Placeholder ${index}`}
            //loading="lazy" // Enables lazy loading natively
            width="600"
            height="400"
          />
        </div>
      ))}
    </div>
  );
};

export default LazyImageList;
