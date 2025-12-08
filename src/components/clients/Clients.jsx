import './Clients.css'

export const Clients = () => {
  const clientsImg = [
    "/images/client-01.png",
    "/images/client-02.png",
    "/images/client-03.png",
    "/images/client-04.png",
    "/images/client-05.png",
    "/images/client-06.png",
  ];
  return (
    <>
      <div className="clients-container">
        {clientsImg.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>
    </>
  );
};
